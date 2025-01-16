import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LucideIcon } from "lucide-react";
import { Languages, GraduationCap, BookOpen, Calculator, Globe } from "lucide-react";

interface TutorialCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

// Initialize with the existing tutorial categories
const initialTutorials: TutorialCategory[] = [
  {
    id: "1",
    title: "IELTS Preparation",
    description: "Comprehensive IELTS training covering all test sections",
    icon: Languages,
    color: "text-blue-500"
  },
  {
    id: "2",
    title: "Common Entrance",
    description: "Preparation for various common entrance examinations",
    icon: GraduationCap,
    color: "text-purple-500"
  },
  {
    id: "3",
    title: "PUTME",
    description: "Post-UTME preparation for Nigerian universities",
    icon: BookOpen,
    color: "text-green-500"
  },
  {
    id: "4",
    title: "Languages",
    description: "Learn multiple languages with native speakers",
    icon: Globe,
    color: "text-red-500"
  },
  {
    id: "5",
    title: "Literature",
    description: "In-depth study of various literary works and analysis",
    icon: BookOpen,
    color: "text-yellow-500"
  },
  {
    id: "6",
    title: "Mathematics",
    description: "From basic to advanced mathematics concepts",
    icon: Calculator,
    color: "text-indigo-500"
  },
  {
    id: "7",
    title: "Sciences",
    description: "Physics, Chemistry, and Biology tutorials",
    icon: BookOpen,
    color: "text-teal-500"
  }
];

const TutorialManagement = () => {
  const [tutorials, setTutorials] = useState<TutorialCategory[]>(initialTutorials);
  const [newTutorial, setNewTutorial] = useState({
    title: "",
    description: "",
  });
  const { toast } = useToast();

  const handleAddTutorial = (e: React.FormEvent) => {
    e.preventDefault();
    const id = (tutorials.length + 1).toString();
    const newTutorialEntry: TutorialCategory = {
      id,
      ...newTutorial,
      icon: BookOpen, // Default icon
      color: "text-blue-500" // Default color
    };
    
    setTutorials([...tutorials, newTutorialEntry]);
    setNewTutorial({ title: "", description: "" });
    
    toast({
      title: "Tutorial Added",
      description: "New tutorial category has been added successfully.",
    });
  };

  const handleDeleteTutorial = (id: string) => {
    setTutorials(tutorials.filter(tutorial => tutorial.id !== id));
    toast({
      title: "Tutorial Deleted",
      description: "Tutorial category has been removed.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Add New Tutorial Category</h2>
        <form onSubmit={handleAddTutorial} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={newTutorial.title}
              onChange={(e) => setNewTutorial({ ...newTutorial, title: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={newTutorial.description}
              onChange={(e) => setNewTutorial({ ...newTutorial, description: e.target.value })}
              required
            />
          </div>
          <Button type="submit">Add Tutorial Category</Button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Tutorial Categories</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tutorials.map((tutorial) => (
              <TableRow key={tutorial.id}>
                <TableCell>{tutorial.title}</TableCell>
                <TableCell>{tutorial.description}</TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteTutorial(tutorial.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TutorialManagement;
