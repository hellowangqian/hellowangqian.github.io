
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  User, 
  Mail, 
  Github, 
  BookOpen, 
  FileText, 
  Presentation
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ResearchHome = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <header className="flex flex-col md:flex-row gap-8 items-start border-b pb-8 mb-8">
          <div className="w-40 h-48 min-w-40 bg-gray-200 overflow-hidden rounded">
            <img 
              src="https://picsum.photos/id/1005/160/192" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">Dr. Jane Researcher</h1>
            <h2 className="text-xl text-gray-600 mb-4">Associate Professor of Computer Science</h2>
            
            <div className="flex flex-wrap gap-1 mb-4">
              <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">Machine Learning</span>
              <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">Computer Vision</span>
              <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-sm">Robotics</span>
            </div>
            
            <p className="text-gray-700 mb-4">
              I am a researcher in the field of computer vision and machine learning.
              My research focuses on developing algorithms for visual perception in challenging environments,
              with applications in autonomous vehicles, robotics, and surveillance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:jane.researcher@example.com" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <Mail size={16} />
                <span>jane.researcher@example.com</span>
              </a>
              <a href="https://github.com/janeresearcher" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </header>
        
        <nav className="mb-10">
          <ul className="flex flex-wrap gap-4 border-b pb-2">
            <li><Link to="/research" className="text-blue-600 hover:text-blue-800 font-medium">Research</Link></li>
            <li><Link to="/publications" className="text-blue-600 hover:text-blue-800 font-medium">Publications</Link></li>
            <li><Link to="/teaching" className="text-blue-600 hover:text-blue-800 font-medium">Teaching</Link></li>
            <li><Link to="/cv" className="text-blue-600 hover:text-blue-800 font-medium">CV</Link></li>
          </ul>
        </nav>
        
        <main>
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Research Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-blue-50 border-blue-100">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Real-time Object Detection</h3>
                  <p className="text-gray-700 mb-3">Novel approaches to object detection in resource-constrained environments.</p>
                  <Link to="/research#object-detection" className="text-blue-600 hover:text-blue-800">Learn more →</Link>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-100">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Neural Architecture Search</h3>
                  <p className="text-gray-700 mb-3">Automated discovery of efficient neural network architectures.</p>
                  <Link to="/research#neural-architecture" className="text-blue-600 hover:text-blue-800">Learn more →</Link>
                </CardContent>
              </Card>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Latest Publications</h2>
            <ul className="space-y-4">
              {latestPublications.map((pub, index) => (
                <li key={index} className="border-b pb-4">
                  <h3 className="font-medium">{pub.title}</h3>
                  <p className="text-gray-700 text-sm">{pub.authors}</p>
                  <p className="text-gray-600 text-sm italic">{pub.venue}, {pub.year}</p>
                  <div className="mt-2 flex gap-2">
                    {pub.pdf && (
                      <a href={pub.pdf} className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1">
                        <FileText size={14} />
                        <span>PDF</span>
                      </a>
                    )}
                    {pub.slides && (
                      <a href={pub.slides} className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1">
                        <Presentation size={14} />
                        <span>Slides</span>
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link to="/publications" className="text-blue-600 hover:text-blue-800">View all publications →</Link>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Current Teaching</h2>
            <ul className="space-y-3">
              <li>
                <h3 className="font-medium">CS4001: Advanced Computer Vision</h3>
                <p className="text-gray-700 text-sm">Fall 2023</p>
              </li>
              <li>
                <h3 className="font-medium">CS2005: Introduction to Machine Learning</h3>
                <p className="text-gray-700 text-sm">Spring 2024</p>
              </li>
            </ul>
            <div className="mt-4">
              <Link to="/teaching" className="text-blue-600 hover:text-blue-800">View all courses →</Link>
            </div>
          </section>
        </main>
        
        <footer className="text-center text-gray-600 border-t pt-6 mt-10">
          <p>© 2023 Dr. Jane Researcher. Last updated: November 2023</p>
        </footer>
      </div>
    </div>
  );
};

// Sample data for latest publications
const latestPublications = [
  {
    title: "Efficient Neural Architecture Search for Real-time Object Detection",
    authors: "J. Researcher, A. Colleague, B. Collaborator",
    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: 2023,
    pdf: "#",
    slides: "#"
  },
  {
    title: "Towards Robust Visual Perception in Adverse Weather Conditions",
    authors: "J. Researcher, C. Student",
    venue: "International Conference on Machine Learning (ICML)",
    year: 2022,
    pdf: "#",
    slides: "#"
  },
  {
    title: "Multi-modal Fusion for Enhanced Scene Understanding",
    authors: "D. Partner, J. Researcher",
    venue: "Neural Information Processing Systems (NeurIPS)",
    year: 2022,
    pdf: "#"
  }
];

export default ResearchHome;
