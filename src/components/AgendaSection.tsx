import { Calendar, Clock } from "lucide-react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const AgendaSection = () => {
  const agenda = {
    day1: [
      { time: "09:00 AM", title: "Registration & Welcome Coffee", description: "Check-in and networking" },
      { time: "10:00 AM", title: "Opening Ceremony", description: "Welcome address by dignitaries" },
      { time: "11:30 AM", title: "Keynote Session", description: "Inspiring leadership talk" },
      { time: "01:00 PM", title: "Lunch Break", description: "Networking lunch" },
      { time: "02:30 PM", title: "Workshop Session 1", description: "Interactive workshops" },
      { time: "05:00 PM", title: "Day 1 Closing", description: "Summary and announcements" },
    ],
    day2: [
      { time: "09:00 AM", title: "Morning Session", description: "Team building activities" },
      { time: "11:00 AM", title: "Panel Discussion", description: "Industry experts sharing insights" },
      { time: "01:00 PM", title: "Lunch Break", description: "Networking lunch" },
      { time: "02:30 PM", title: "Workshop Session 2", description: "Skill development sessions" },
      { time: "05:00 PM", title: "Evening Social", description: "Informal networking" },
    ],
    day3: [
      { time: "09:00 AM", title: "Final Day Kickoff", description: "Morning energizer" },
      { time: "10:00 AM", title: "Awards & Recognition", description: "Celebrating achievements" },
      { time: "11:30 AM", title: "Closing Ceremony", description: "Final remarks and vote of thanks" },
      { time: "12:30 PM", title: "Farewell Lunch", description: "Closing networking lunch" },
    ],
  };

  return (
    <section id="agenda" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Event Agenda</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Three days of learning, networking, and inspiration
        </p>
        
        <Tabs defaultValue="day1" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="day1">Day 1 - March 15</TabsTrigger>
            <TabsTrigger value="day2">Day 2 - March 16</TabsTrigger>
            <TabsTrigger value="day3">Day 3 - March 17</TabsTrigger>
          </TabsList>
          
          {Object.entries(agenda).map(([day, events]) => (
            <TabsContent key={day} value={day}>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex items-center gap-2 text-primary font-semibold min-w-[120px]">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default AgendaSection;
