import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';

const app = express();
app.use(cors());
app.use(express.json());

// // Mock data storage
// const locations: Record<string, Array<{
//   rank: number;
//   name: string;
//   address: string;
//   lat: number;
//   lon: number;
// }>> = {
//   airoli: [
//     {
//       rank: 1,
//       name: "Airoli Sector 3 Distribution Hub",
//       address: "Plot 17, Sector 3, Airoli, Navi Mumbai, Maharashtra 400708",
//       lat: 19.155,
//       lon: 72.995
//     },
//     // Add other locations here
//   ]
// };

const locations: Record<string, Array<{
  rank: number;
  name: string;
  address: string;
  lat: number;
  lon: number;
}>> = {
  airoli: [
    {
      rank: 1,
      name: "Airoli Sector 3 Distribution Hub",
      address: "Near Sector 3, Airoli, Navi Mumbai",
      lat: 19.15763874,
      lon: 72.99399330
    },
    {
      rank: 2,
      name: "Dark Store Location 2",
      address: "Near Sector 3, Airoli, Navi Mumbai",
      lat: 19.15766914,
      lon: 72.99395038
    },
    {
      rank: 3,
      name: "Dark Store Location 3",
      address: "Near Sector 3, Airoli, Navi Mumbai",
      lat: 19.15793069,
      lon: 72.99392346
    },
    {
      rank: 4,
      name: "Dark Store Location 4",
      address: "Near Sector 3, Airoli, Navi Mumbai",
      lat: 19.15779204,
      lon: 72.99358647
    },
    {
      rank: 5,
      name: "Dark Store Location 5",
      address: "Near Sector 3, Airoli, Navi Mumbai",
      lat: 19.15784271,
      lon: 72.99356501
    },
    {
      rank: 6,
      name: "Dark Store Location 6",
      address: "Near Sector 3, Airoli, Navi Mumbai",
      lat: 19.15798452,
      lon: 72.99319712
    },
    {
      rank: 7,
      name: "Dark Store Location 7",
      address: "Near Sector 3, Airoli, Navi Mumbai",
      lat: 19.15832698,
      lon: 72.99272268
    },
    {
      rank: 8,
      name: "Dark Store Location 8",
      address: "Near Sector 3, Airoli, Navi Mumbai",
      lat: 19.15773428,
      lon: 72.99266412
    },
    {
      rank: 9,
      name: "Dark Store Location 9",
      address: "Near Sector 3, Airoli, Navi Mumbai",
      lat: 19.15904869,
      lon: 72.99179542
    },
    {
      rank: 10,
      name: "Dark Store Location 10",
      address: "Near Sector 3, Airoli, Navi Mumbai",
      lat: 19.15560888,
      lon: 72.99872608
    }
  ]
};


// Routes
app.get('/api/search', (req: Request, res: Response) => {
  const term = (req.query.term || '').toString().toLowerCase();

  const locations = [
    'Airoli', 'Andheri', 'Ambernath', 'Antop Hill', 'Agripada', 'Asalpha',
    'Bandra', 'Borivali', 'Bhandup', 'Byculla', 'Breach Candy', 'Bhuleshwar', 'Bhivandi',
    'Chembur', 'Charkop', 'Churchgate', 'Cuffe Parade', 'Charni Road', 'Chandivali',
    'Dadar', 'Dombivli', 'Dahisar', 'Dockyard Road', 'Deonar', 'Dharavi', 'Dongri',
    'Elphinstone', 'Evershine Nagar', 'Eden Garden', 'Evershine City', 'Ektar Garden',
    'Fort', 'Fanaswadi', 'Falkland Road', 'Fisheries Wharf', 'Friends Colony',
    'Goregaon', 'Ghatkopar', 'Govandi', 'Grant Road', 'Ghansoli', 'Gamdevi',
    'Hiranandani', 'Haji Ali', 'Hindmata', 'Hutatma Chowk', 'Hiranandani Estate', 'Hiranandani Gardens',
    'IIT Powai', 'IC Colony', 'Indira Nagar', 'Irani Wadi', 'Indian Oil Nagar',
    'Juhu', 'Jogeshwari', 'Jacob Circle', 'Jankalyan Nagar', 'Jawahar Nagar',
    'Kandivali', 'Kurla', 'Khar', 'Kalyan', 'Kalbadevi', 'Kanjurmarg', 'King’s Circle',
    'Lower Parel', 'Lokhandwala', 'LBS Nagar', 'Lalbaug', 'Lonavala Road', 'Lohar Chawl',
    'Mulund', 'Malad', 'Mahim', 'Mazgaon', 'Mankhurd', 'Marol', 'Mandvi',
    'Navi Mumbai', 'Naigaon', 'Nalasopara', 'Nagpada', 'Nariman Point', 'Nehru Nagar', 'Naupada',
    'Orlem', 'Oshiwara', 'Opera House', 'Old Kalyan', 'Old Panvel',
    'Powai', 'Parel', 'Panvel', 'Prabhadevi', 'Palava', 'Parle East', 'Parle West',
    'Queen’s Road', 'Qureshi Nagar', 'Qadri Chowk',
    'Rabale', 'Reay Road', 'Rani Baug', 'Rajawadi', 'Ram Mandir', 'RK Studios', 'Rafiq Nagar',
    'Santacruz', 'Sion', 'Seawoods', 'Sandhurst Road', 'Sewri', 'Shivaji Park', 'Shimpoli',
    'Thane', 'Tardeo', 'Trombay', 'Tilak Nagar', 'Turbhe', 'Tagore Nagar',
    'Ulhasnagar', 'Uran', 'Umbharli', 'Ulwe',
    'Vasai', 'Vikhroli', 'Vile Parle', 'Versova', 'Vidya Vihar', 'Vakola', 'Virar',
    'Wadala', 'Worli', 'Walkeshwar', 'Wadala East', 'Wadala West', 'Wilson College Area',
    'Xavier Nagar', 'Xaviers College Road',
    'Yari Road', 'Yeshwant Nagar', 'Yamuna Nagar', 'Yadav Nagar',
    'Zaveri Bazaar', 'Zari Village', 'Zohra Nagar'
  ];

  const suggestions = locations.filter(loc => loc.toLowerCase().startsWith(term));
  res.json(suggestions);
});


app.get('/api/locations/:city', (req: Request, res: Response) => {
  const city = req.params.city.toLowerCase();
  const data = locations[city];
  
  if (!data) {
    return res.status(404).json({ 
      error: `Work in progress for ${req.params.city}` 
    });
  }
  
  res.json(data);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});