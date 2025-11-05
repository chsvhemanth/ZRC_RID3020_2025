import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Users } from "lucide-react";
import logo from "@/assets/rac-rgb-logo.png";

const Attendees = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample attendee data
  const attendees = [
    { id: 1, name: "John Doe", club: "Rotaract Club 1", district: "District 3141", role: "Member" },
    { id: 2, name: "Jane Smith", club: "Rotaract Club 2", district: "District 3141", role: "President" },
    { id: 3, name: "Mike Johnson", club: "Rotaract Club 3", district: "District 3141", role: "Secretary" },
    { id: 4, name: "Sarah Williams", club: "Rotaract Club 1", district: "District 3141", role: "Treasurer" },
    { id: 5, name: "David Brown", club: "Rotaract Club 2", district: "District 3141", role: "Member" },
    { id: 6, name: "Emily Davis", club: "Rotaract Club 3", district: "District 3141", role: "Vice President" },
    { id: 7, name: "Chris Wilson", club: "Rotaract Club 1", district: "District 3141", role: "Member" },
    { id: 8, name: "Lisa Anderson", club: "Rotaract Club 2", district: "District 3141", role: "Member" },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Conference Attendees</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Connect with fellow Rotaractors attending the conference
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
