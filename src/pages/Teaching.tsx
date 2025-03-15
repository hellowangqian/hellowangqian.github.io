
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Calendar, Users, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Teaching = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Teaching</h1>
        
        <p className="text-gray-700 mb-8 text-lg">
          I teach undergraduate and graduate courses in computer vision, machine learning, 
          and related areas. My teaching philosophy emphasizes hands-on learning, 
          real-world applications, and the development of both theoretical understanding 
          and practical implementation skills.
        </p>
        
        <Tabs defaultValue="current" className="mb-10">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="current" className="flex-1">
              <Calendar size={16} className="mr-2" />
              Current Courses
            </TabsTrigger>
            <TabsTrigger value="past" className="flex-1">
              <BookOpen size={16} className="mr-2" />
              Past Courses
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="current">
            <div className="space-y-8">
              <CourseCard
                code="CS4001"
                title="Advanced Computer Vision"
                term="Fall 2023"
                level="Graduate"
                description="This course covers advanced topics in computer vision including object detection, 
                instance segmentation, 3D vision, and visual SLAM. Students will implement state-of-the-art 
                computer vision algorithms and complete a research project."
                topics={[
                  "Deep learning for visual recognition",
                  "Multi-view geometry and 3D reconstruction",
                  "Visual tracking and motion estimation",
                  "Visual SLAM systems",
                  "Generative models for vision"
                ]}
                materials={[
                  { label: "Syllabus", link: "#" },
                  { label: "Course Website", link: "#" }
                ]}
              />
              
              <CourseCard
                code="CS2005"
                title="Introduction to Machine Learning"
                term="Spring 2024"
                level="Undergraduate"
                description="An introductory course on machine learning covering fundamental concepts, 
                algorithms, and applications. Topics include supervised learning, unsupervised learning, 
                and basic deep learning. The course emphasizes practical skills with programming assignments in Python."
                topics={[
                  "Linear and logistic regression",
                  "Decision trees and random forests",
                  "Neural networks and backpropagation",
                  "Clustering and dimensionality reduction",
                  "Model evaluation and validation"
                ]}
                materials={[
                  { label: "Syllabus", link: "#" },
                  { label: "Course Website", link: "#" }
                ]}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="past">
            <div className="space-y-8">
              <CourseCard
                code="CS3002"
                title="Computer Vision"
                term="Spring 2023"
                level="Undergraduate"
                description="An introduction to computer vision covering image formation, feature detection, 
                image segmentation, object recognition, and deep learning approaches to vision problems."
                topics={[
                  "Image processing and filtering",
                  "Feature detection and matching",
                  "Camera models and calibration",
                  "Convolutional neural networks for vision",
                  "Object detection and segmentation"
                ]}
                materials={[
                  { label: "Syllabus", link: "#" },
                  { label: "Course Materials", link: "#" }
                ]}
              />
              
              <CourseCard
                code="CS5001"
                title="Deep Learning for Computer Vision"
                term="Fall 2022"
                level="Graduate"
                description="A specialized course focusing on deep learning techniques for computer vision tasks. 
                The course covers CNN architectures, training methodologies, and applications to various vision problems."
                topics={[
                  "CNN architectures (ResNet, EfficientNet, Vision Transformer)",
                  "Object detection (YOLO, Faster R-CNN)",
                  "Semantic segmentation (FCN, U-Net)",
                  "Generative models (GANs, VAEs)",
                  "Transfer learning and fine-tuning"
                ]}
                materials={[
                  { label: "Syllabus", link: "#" },
                  { label: "Course Materials", link: "#" }
                ]}
              />
              
              <CourseCard
                code="CS1001"
                title="Introduction to Programming"
                term="Fall 2021"
                level="Undergraduate"
                description="A first course in programming using Python, covering basic programming concepts, 
                data structures, algorithms, and problem-solving techniques."
                topics={[
                  "Variables, expressions, and statements",
                  "Control flow (conditionals, loops)",
                  "Functions and modular programming",
                  "Data structures (lists, dictionaries, sets)",
                  "File I/O and error handling"
                ]}
                materials={[
                  { label: "Syllabus", link: "#" },
                  { label: "Course Materials", link: "#" }
                ]}
              />
            </div>
          </TabsContent>
        </Tabs>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Student Advising</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium flex items-center">
                  <Users size={18} className="mr-2" />
                  Undergraduate Research Opportunities
                </h3>
                <p className="mt-2 text-gray-700">
                  I regularly supervise undergraduate research projects in computer vision and 
                  machine learning. Interested students should email me with their CV and research interests.
                </p>
                <ul className="mt-3 space-y-1 text-gray-700 text-sm">
                  <li>• Computer vision for mobile applications</li>
                  <li>• Efficient deep learning model deployment</li>
                  <li>• Dataset creation and annotation</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium flex items-center">
                  <BookOpen size={18} className="mr-2" />
                  Graduate Student Mentoring
                </h3>
                <p className="mt-2 text-gray-700">
                  I am currently accepting new graduate students (both MS and PhD) 
                  interested in computer vision and deep learning research. 
                  Prospective students should review my recent publications 
                  and research areas before contacting me.
                </p>
                <p className="mt-3 text-blue-600">
                  <a href="#" className="flex items-center hover:underline">
                    <ExternalLink size={14} className="mr-1" />
                    Application Information
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Teaching Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium">Computer Vision Tutorials</h3>
                <p className="mt-2 text-gray-700">
                  A collection of tutorials and code examples for common computer vision tasks.
                </p>
                <a href="#" className="mt-2 text-blue-600 hover:underline block">
                  Access Tutorials
                </a>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium">Machine Learning Labs</h3>
                <p className="mt-2 text-gray-700">
                  Hands-on jupyter notebooks for implementing and experimenting with ML algorithms.
                </p>
                <a href="#" className="mt-2 text-blue-600 hover:underline block">
                  Download Labs
                </a>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium">Dataset Repository</h3>
                <p className="mt-2 text-gray-700">
                  Curated datasets for student projects and assignments.
                </p>
                <a href="#" className="mt-2 text-blue-600 hover:underline block">
                  Browse Datasets
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

interface CourseCardProps {
  code: string;
  title: string;
  term: string;
  level: "Undergraduate" | "Graduate";
  description: string;
  topics: string[];
  materials: {
    label: string;
    link: string;
  }[];
}

const CourseCard: React.FC<CourseCardProps> = ({
  code,
  title,
  term,
  level,
  description,
  topics,
  materials
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-bold text-lg">{code}: {title}</h3>
            <p className="text-gray-600">{term} • {level}</p>
          </div>
          <span className={`px-2 py-1 rounded text-xs font-medium ${
            level === "Graduate" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
          }`}>
            {level}
          </span>
        </div>
        
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="font-medium mb-2">Key Topics</h4>
          <ul className="space-y-1 text-gray-700 text-sm">
            {topics.map((topic, index) => (
              <li key={index}>• {topic}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Course Materials</h4>
          <div className="flex gap-3">
            {materials.map((material, index) => (
              <a 
                key={index} 
                href={material.link}
                className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
              >
                <ExternalLink size={14} className="mr-1" />
                {material.label}
              </a>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Teaching;
