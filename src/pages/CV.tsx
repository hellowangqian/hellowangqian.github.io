
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Mail, MapPin, Phone, Globe, Briefcase, GraduationCap, Award, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CV = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-6 flex justify-between items-center">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
          
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download size={16} className="mr-2" />
            Download CV as PDF
          </Button>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Curriculum Vitae</h1>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h2 className="text-2xl font-bold">Dr. Jane Researcher</h2>
                <h3 className="text-xl text-gray-600">Associate Professor of Computer Science</h3>
              </div>
              
              <div className="mt-4 md:mt-0 space-y-1 text-gray-700">
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span>jane.researcher@example.com</span>
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>Department of Computer Science, University of Technology</span>
                </div>
                <div className="flex items-center">
                  <Globe size={16} className="mr-2" />
                  <span>https://janeresearcher.github.io</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2 flex items-center">
            <Briefcase size={20} className="mr-2" />
            Employment
          </h2>
          <ul className="space-y-6">
            <li>
              <div className="flex flex-col md:flex-row md:justify-between mb-1">
                <h3 className="font-bold">Associate Professor</h3>
                <span className="text-gray-600">2019 - Present</span>
              </div>
              <div className="text-gray-700 mb-1">Department of Computer Science, University of Technology</div>
              <p className="text-gray-700 text-sm">
                Leading research in computer vision and deep learning. Teaching graduate and undergraduate courses in 
                computer vision, machine learning and programming. Supervising PhD and Masters students.
              </p>
            </li>
            
            <li>
              <div className="flex flex-col md:flex-row md:justify-between mb-1">
                <h3 className="font-bold">Assistant Professor</h3>
                <span className="text-gray-600">2014 - 2019</span>
              </div>
              <div className="text-gray-700 mb-1">Department of Computer Science, University of Technology</div>
              <p className="text-gray-700 text-sm">
                Established a research program in computer vision. Developed and taught courses on computer vision, 
                image processing, and artificial intelligence.
              </p>
            </li>
            
            <li>
              <div className="flex flex-col md:flex-row md:justify-between mb-1">
                <h3 className="font-bold">Postdoctoral Researcher</h3>
                <span className="text-gray-600">2012 - 2014</span>
              </div>
              <div className="text-gray-700 mb-1">Vision Lab, Stanford University</div>
              <p className="text-gray-700 text-sm">
                Conducted research on object detection and recognition algorithms for autonomous vehicles.
                Collaborated on multiple funded research projects and published 5 journal papers.
              </p>
            </li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2 flex items-center">
            <GraduationCap size={20} className="mr-2" />
            Education
          </h2>
          <ul className="space-y-6">
            <li>
              <div className="flex flex-col md:flex-row md:justify-between mb-1">
                <h3 className="font-bold">Ph.D. in Computer Science</h3>
                <span className="text-gray-600">2008 - 2012</span>
              </div>
              <div className="text-gray-700 mb-1">Massachusetts Institute of Technology (MIT)</div>
              <p className="text-gray-700 text-sm">
                Thesis: "Computer Vision Algorithms for Autonomous Systems"
                <br />
                Advisor: Prof. Michael Smith
              </p>
            </li>
            
            <li>
              <div className="flex flex-col md:flex-row md:justify-between mb-1">
                <h3 className="font-bold">M.S. in Computer Science</h3>
                <span className="text-gray-600">2006 - 2008</span>
              </div>
              <div className="text-gray-700 mb-1">University of California, Berkeley</div>
              <p className="text-gray-700 text-sm">
                Focus: Artificial Intelligence and Machine Learning
              </p>
            </li>
            
            <li>
              <div className="flex flex-col md:flex-row md:justify-between mb-1">
                <h3 className="font-bold">B.S. in Computer Engineering</h3>
                <span className="text-gray-600">2002 - 2006</span>
              </div>
              <div className="text-gray-700 mb-1">University of Washington</div>
              <p className="text-gray-700 text-sm">
                Graduated with Honors, GPA: 3.95/4.0
              </p>
            </li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2 flex items-center">
            <Award size={20} className="mr-2" />
            Awards and Honors
          </h2>
          <ul className="space-y-3">
            <li>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="font-medium">Faculty Excellence in Research Award</h3>
                  <p className="text-gray-700 text-sm">University of Technology</p>
                </div>
                <span className="text-gray-600">2022</span>
              </div>
            </li>
            
            <li>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="font-medium">Best Paper Award</h3>
                  <p className="text-gray-700 text-sm">IEEE Conference on Computer Vision and Pattern Recognition (CVPR)</p>
                </div>
                <span className="text-gray-600">2021</span>
              </div>
            </li>
            
            <li>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="font-medium">Young Investigator Award</h3>
                  <p className="text-gray-700 text-sm">National Science Foundation (NSF)</p>
                </div>
                <span className="text-gray-600">2018</span>
              </div>
            </li>
            
            <li>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="font-medium">Outstanding Teaching Award</h3>
                  <p className="text-gray-700 text-sm">Department of Computer Science, University of Technology</p>
                </div>
                <span className="text-gray-600">2016</span>
              </div>
            </li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2 flex items-center">
            <FileText size={20} className="mr-2" />
            Selected Publications
          </h2>
          <p className="text-gray-700 mb-4">
            For a complete list of publications, please visit the <Link to="/publications" className="text-blue-600 hover:text-blue-800">Publications</Link> page.
          </p>
          <ul className="space-y-4">
            {selectedPublications.map((pub, index) => (
              <li key={index} className="text-sm">
                <p className="font-medium">{pub.authors} ({pub.year})</p>
                <p className="text-gray-800">{pub.title}</p>
                <p className="text-gray-600 italic">{pub.venue}, {pub.details}</p>
              </li>
            ))}
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Professional Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2">Conference Organization</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Program Chair, International Conference on Computer Vision (ICCV), 2023</li>
                <li>• Area Chair, Neural Information Processing Systems (NeurIPS), 2021-2022</li>
                <li>• Workshop Organizer, "Efficient Deep Learning for Computer Vision", CVPR 2020</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Journal Editorial Boards</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Associate Editor, IEEE Transactions on Pattern Analysis and Machine Intelligence, 2020-present</li>
                <li>• Editorial Board Member, International Journal of Computer Vision, 2019-present</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2">Programming Languages</h3>
              <p className="text-gray-700">Python, C++, MATLAB, JavaScript, CUDA</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Frameworks & Libraries</h3>
              <p className="text-gray-700">PyTorch, TensorFlow, OpenCV, scikit-learn, NumPy</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Research Skills</h3>
              <p className="text-gray-700">Deep Learning, Computer Vision, Optimization, Algorithm Design</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">Languages</h3>
              <p className="text-gray-700">English (Native), Spanish (Proficient), French (Basic)</p>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">References</h2>
          <p className="text-gray-700">Available upon request.</p>
        </section>
      </div>
    </div>
  );
};

// Sample data for selected publications
const selectedPublications = [
  {
    authors: "Researcher, J., Smith, A., & Lee, B.",
    year: 2023,
    title: "Deep Learning for Real-time Object Detection in Autonomous Vehicles",
    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    details: "pp. 1234-1242"
  },
  {
    authors: "Researcher, J. & Wilson, C.",
    year: 2023,
    title: "Multi-scale Feature Pyramid Networks for Accurate Object Localization",
    venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    details: "Vol. 45, No. 3, pp. 567-579"
  },
  {
    authors: "Researcher, J., Johnson, D., & Garcia, M.",
    year: 2022,
    title: "Neural Architecture Search for Efficient Deep Learning Models",
    venue: "International Conference on Machine Learning (ICML)",
    details: "pp. 876-885"
  },
  {
    authors: "Researcher, J. & Brown, R.",
    year: 2022,
    title: "Adversarial Training Methods for Robust Visual Perception",
    venue: "Neural Information Processing Systems (NeurIPS)",
    details: "pp. 2345-2354"
  },
  {
    authors: "Researcher, J., Miller, S., & Wang, T.",
    year: 2021,
    title: "A Survey of Deep Learning Approaches for Autonomous Driving Systems",
    venue: "ACM Computing Surveys",
    details: "Vol. 53, No. 4, Article 77"
  }
];

export default CV;
