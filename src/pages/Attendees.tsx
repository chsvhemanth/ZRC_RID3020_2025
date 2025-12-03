import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Users } from "lucide-react";
import logo from "@/assets/Zonalconferencelogo.png";

const Attendees = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample attendee data
  const attendees = [
  {
    "id": 1,
    "name": "Rtr SRINIVAS Adapa",
    "club": "Rotaract club of Coastal Andhra (Tuni)",
    "district": "RID 3020",
    "role": "Members"
  },
  {
    "id": 2,
    "name": "madharabedu meghana",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Member"
  },
  {
    "id": 3,
    "name": "Kavuri.Ruthika Chowdary",
    "club": "Rotaract club of PVP Siddhartha",
    "district": "RID 3020",
    "role": "Polio chair"
  },
  {
    "id": 4,
    "name": "Vuyyala Sagar",
    "club": "Rotaract club of PVP Siddhartha",
    "district": "RID 3020",
    "role": "Ex. YSD"
  },
  {
    "id": 5,
    "name": "Shaik Meera Shareef",
    "club": "Rotaract club of Royal City Bezawada",
    "district": "RID 3020",
    "role": "Mahadan chair"
  },
  {
    "id": 6,
    "name": "SAI PRUDHVI JASTI",
    "club": "Rotaract club of PVP Siddhartha",
    "district": "RID 3020",
    "role": "DISTRICT POLIO CHAIR, CLUB LEARNING FACILITATOR"
  },
  {
    "id": 7,
    "name": "Rtr Uday Kiran Rampati",
    "club": "Rotaract club of PVP Siddhartha",
    "district": "RID 3020",
    "role": "Treasurer"
  },
  {
    "id": 8,
    "name": "Bhavitha Sri Kagitha",
    "club": "Rotaract club of PVP Siddhartha",
    "district": "RID 3020",
    "role": "Immediate Past President"
  },
  {
    "id": 9,
    "name": "Ankitha. Popuri",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "RIDE"
  },
  {
    "id": 10,
    "name": "Parimisetty Naga Sai Manasvi",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Member"
  },
  {
    "id": 11,
    "name": "Abhinav kalamraju",
    "club": "Rotaract club of PVP Siddhartha",
    "district": "RID 3020",
    "role": "Club Service Director"
  },
  {
    "id": 12,
    "name": "Vakalapudi Lakshmi Prasanna",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Creative head"
  },
  {
    "id": 13,
    "name": "Naralasetti Yasaswini",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Member"
  },
  {
    "id": 14,
    "name": "Sandaka Turangeswari Devi",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Member"
  },
  {
    "id": 15,
    "name": "Koushik Garikapati",
    "club": "Rotaract club of Atoma of Aditya",
    "district": "RID 3020",
    "role": "PR MEDIA"
  },
  {
    "id": 16,
    "name": "Rtr.Sai Sri Sammeta",
    "club": "Rotaract club of PVP Siddhartha",
    "district": "RID 3020",
    "role": "Community Service Director"
  },
  {
    "id": 17,
    "name": "Penamakuru Naga Nikhila",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Member"
  },
  {
    "id": 18,
    "name": "Phanindra Sunkara",
    "club": "Rotaract club of Royal City Bezawada",
    "district": "RID 3020",
    "role": "District Rotaract Representative Elect"
  },
  {
    "id": 19,
    "name": "Shaik Shahistha Zabeen",
    "club": "Rotaract club of PVP Siddhartha",
    "district": "RID 3020",
    "role": "President"
  },
  {
    "id": 20,
    "name": "Sammangi kedareswari",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Professional service director"
  },
  {
    "id": 21,
    "name": "Anitha Vanamatla",
    "club": "Rotaract club of Royal City Bezawada",
    "district": "RID 3020",
    "role": "Seven Areas of focus"
  },
  {
    "id": 22,
    "name": "Rtr.Kollipara Jyothi Swaroop Sai",
    "club": "Rotaract club of PVP Siddhartha",
    "district": "RID 3020",
    "role": "International Service Director"
  },
  {
    "id": 23,
    "name": "Arumalla kalpana",
    "club": "Rotaract club of Royal City Bezawada",
    "district": "RID 3020",
    "role": "Club member"
  },
  {
    "id": 24,
    "name": "Sruthi Burugupalli",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Member"
  },
  {
    "id": 25,
    "name": "Gadamsetty Venkata Sai Hasini Chandana",
    "club": "Rotaract club of Royal City Bezawada",
    "district": "RID 3020",
    "role": "Women empowerment chair"
  },
  {
    "id": 26,
    "name": "MAREEDU DEDEEPYA",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Seven areas of focus"
  },
  {
    "id": 27,
    "name": "Bhargavi THANNIRU",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Member"
  },
  {
    "id": 28,
    "name": "Jayadeep ravulapati",
    "club": "Rotaract club of Vijayawada",
    "district": "RID 3020",
    "role": "President"
  },
  {
    "id": 29,
    "name": "Lasya Morla",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Member"
  },
  {
    "id": 30,
    "name": "GANESH KUMAR VUKANTI",
    "club": "Rotaract club of Royal City Bezawada",
    "district": "RID 3020",
    "role": "Foundation chair"
  },
  {
    "id": 31,
    "name": "Gattem Soumya",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Member"
  },
  {
    "id": 32,
    "name": "Manda Dilip",
    "club": "Rotaract club of PVP Siddhartha",
    "district": "RID 3020",
    "role": "Sergeant at arms"
  },
  {
    "id": 33,
    "name": "Sure Narendra",
    "club": "Rotaract club of Vijayawada",
    "district": "RID 3020",
    "role": "Sergeant at Arms"
  },
  {
    "id": 34,
    "name": "Shaik Sony",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Polio chairman"
  },
  {
    "id": 35,
    "name": "NEELLA PRABHU BHARATH",
    "club": "Rotaract club of Atoma of Aditya",
    "district": "RID 3020",
    "role": "Secratary"
  },
  {
    "id": 36,
    "name": "Bhukya Mohan Krishna Naik",
    "club": "Rotaract club of Royal City Bezawada",
    "district": "RID 3020",
    "role": "Secretary General"
  },
  {
    "id": 37,
    "name": "PULI JAHNAVI",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Community Service Director"
  },
  {
    "id": 38,
    "name": "Eakavardhan Aakarsh Mattupalli",
    "club": "Rotaract club of Royal City Bezawada",
    "district": "RID 3020",
    "role": "International Service Director"
  },
  {
    "id": 39,
    "name": "Panduri Rekha",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Member"
  },
  {
    "id": 40,
    "name": "challa harshitha",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "WOMEN EMPOWERMENT CHAIR"
  },
  {
    "id": 41,
    "name": "P Naga Yamini",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Member"
  },
  {
    "id": 42,
    "name": "DUDDUKURI DIVYA JYOTHI",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Member"
  },
  {
    "id": 43,
    "name": "SUREPALLI .M . YASASWI",
    "club": "Rotaract club of Royal City Bezawada",
    "district": "RID 3020",
    "role": "Professional Service Director"
  },
  {
    "id": 44,
    "name": "Renuka Maddamsetty",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Secretary Administration"
  },
  {
    "id": 45,
    "name": "Shaik Humera Begum",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Secretary General"
  },
  {
    "id": 46,
    "name": "Yarramsetty Mahalakshmi",
    "club": "Rotaract club of Royal City Bezawada",
    "district": "RID 3020",
    "role": "Video editor"
  },
  {
    "id": 47,
    "name": "Manepalli Venkata Shanmukha Sree",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "Youth Service Director"
  },
  {
    "id": 48,
    "name": "Rtr. Gurram Taraka Rohith",
    "club": "Rotaract club of Vijayawada Elite League",
    "district": "RID 3020",
    "role": "President"
  },
  {
    "id": 49,
    "name": "Lalitha Korada",
    "club": "Rotaract Club of Aarunya of Aditya",
    "district": "RID 3020",
    "role": "President"
  },
  {
    "id": 50,
    "name": "Satya Venkata Hemanth Challapalli",
    "club": "Rotaract club of Royal City Bezawada",
    "district": "RID 3020",
    "role": "Secretary Administrations"
  },
  {
    "id": 51,
    "name": "Prabhu Kalyan Ratnala",
    "club": "Rotaract club of Royal City Bezawada",
    "district": "RID 3020",
    "role": "Zonal Rotaract Representative"
  },
  {
    "id": 52,
    "name": "Akhil Boodala",
    "club": "Rotaract club of Royal City Bezawada",
    "district": "RID 3020",
    "role": "Vice President"
  }
];

  const filteredAttendees = attendees.filter((attendee) =>
    attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attendee.club.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attendee.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pragathi Zonal Meet Attendees</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Connect with fellow Rotaractors attending the Pragathi Zonal Meet
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-semibold">{attendees.length} Registered</span>
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name, club, or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredAttendees.map((attendee) => (
              <Card key={attendee.id} className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <img 
                    src={logo} 
                    alt={attendee.name}
                    className="h-16 w-16 rounded-full border-2 border-primary/20"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{attendee.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{attendee.club}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {attendee.role}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {attendee.district}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredAttendees.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No attendees found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Attendees;
