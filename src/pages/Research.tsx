
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Research = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Research</h1>
        
        <p className="text-gray-700 mb-8 text-lg">
          My research focuses on developing efficient and robust computer vision algorithms 
          for challenging real-world scenarios. I work at the intersection of deep learning, 
          computer vision, and autonomous systems with the goal of creating reliable 
          perception systems that can operate in diverse environments.
        </p>
        
        <ResearchArea
          id="object-detection"
          title="Real-time Object Detection"
          image="https://picsum.photos/id/237/800/400"
          description="Our research explores approaches for faster and more accurate object detection in resource-constrained environments such as mobile devices and embedded systems. We develop novel network architectures and optimization techniques to achieve real-time performance without sacrificing accuracy."
          keyPublications={[
            {
              title: "Deep Learning for Real-time Object Detection in Autonomous Vehicles",
              authors: "Jane Researcher, Alan Smith, Benjamin Lee",
              venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2023",
              link: "/publications"
            },
            {
              title: "Multi-scale Feature Pyramid Networks for Accurate Object Localization",
              authors: "Jane Researcher, Christopher Wilson",
              venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence, 2023",
              link: "/publications"
            }
          ]}
        />
        
        <ResearchArea
          id="neural-architecture"
          title="Neural Architecture Search"
          image="https://picsum.photos/id/1/800/400"
          description="We investigate automated methods to discover efficient neural network architectures tailored for specific computer vision tasks. Our research addresses the challenge of designing architectures that balance computational requirements, memory footprint, and task performance."
          keyPublications={[
            {
              title: "Neural Architecture Search for Efficient Deep Learning Models",
              authors: "Jane Researcher, David Johnson, Maria Garcia",
              venue: "International Conference on Machine Learning (ICML), 2022",
              link: "/publications"
            }
          ]}
        />
        
        <ResearchArea
          id="adversarial-robustness"
          title="Adversarial Robustness"
          image="https://picsum.photos/id/1024/800/400"
          description="This research direction focuses on improving the robustness of computer vision models against adversarial attacks and natural corruptions. We develop training methodologies and architectural innovations to create models that maintain high performance even in the presence of input perturbations."
          keyPublications={[
            {
              title: "Adversarial Training Methods for Robust Visual Perception",
              authors: "Jane Researcher, Robert Brown",
              venue: "Neural Information Processing Systems (NeurIPS), 2022",
              link: "/publications"
            }
          ]}
        />
        
        <ResearchArea
          id="vision-challenging"
          title="Vision in Challenging Environments"
          image="https://picsum.photos/id/160/800/400"
          description="We research computer vision techniques that operate reliably in challenging environments such as low-light conditions, adverse weather, and dynamic scenes. Our work includes specialized sensing, novel algorithms, and dataset creation to push the boundaries of vision systems in the real world."
          keyPublications={[
            {
              title: "Attention Mechanisms for Visual Understanding in Low-light Conditions",
              authors: "Jane Researcher, Michael Clark",
              venue: "European Conference on Computer Vision (ECCV), 2021",
              link: "/publications"
            }
          ]}
        />
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2" id="funding">Research Funding</h2>
          <ul className="space-y-6">
            <li>
              <h3 className="font-medium">National Science Foundation (NSF)</h3>
              <p className="text-gray-700">Robust Computer Vision for Autonomous Systems in Adverse Conditions</p>
              <p className="text-gray-600 text-sm">2022-2025, $750,000</p>
            </li>
            <li>
              <h3 className="font-medium">Industry Research Partnership</h3>
              <p className="text-gray-700">Efficient Neural Networks for Mobile Vision Applications</p>
              <p className="text-gray-600 text-sm">2021-2023, $250,000</p>
            </li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2" id="students">Research Group</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium">PhD Students</h3>
                <ul className="mt-2 space-y-2">
                  <li>Alex Johnson (2021-present): Real-time Object Detection</li>
                  <li>Maria Rodriguez (2020-present): Adversarial Robustness</li>
                  <li>David Kim (2019-present): Neural Architecture Search</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium">Masters Students</h3>
                <ul className="mt-2 space-y-2">
                  <li>Sarah Williams (2022-present): Edge Computing for Vision</li>
                  <li>James Wilson (2022-present): Low-light Computer Vision</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2" id="collaborations">Collaborations</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-medium">Computer Vision Lab, Stanford University</h3>
              <p className="text-gray-700">Joint research on multi-modal sensing for autonomous vehicles</p>
            </li>
            <li>
              <h3 className="font-medium">Autonomous Systems Research Group, ETH Zurich</h3>
              <p className="text-gray-700">International collaboration on visual SLAM technologies</p>
            </li>
            <li>
              <h3 className="font-medium">TechCorp Research</h3>
              <p className="text-gray-700">Industry partnership on deploying vision models to edge devices</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

interface ResearchAreaProps {
  id: string;
  title: string;
  image: string;
  description: string;
  keyPublications: {
    title: string;
    authors: string;
    venue: string;
    link: string;
  }[];
}

const ResearchArea: React.FC<ResearchAreaProps> = ({
  id,
  title,
  image,
  description,
  keyPublications
}) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <section className="mb-12" id={id}>
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">{title}</h2>
      <div className="mb-4 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-auto"
        />
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      
      <div>
        <button 
          onClick={() => setExpanded(!expanded)}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-2"
        >
          {expanded ? (
            <>
              <ChevronUp size={16} className="mr-1" />
              Hide Key Publications
            </>
          ) : (
            <>
              <ChevronDown size={16} className="mr-1" />
              Show Key Publications
            </>
          )}
        </button>
        
        {expanded && (
          <div className="pl-4 border-l-2 border-blue-200 mb-4">
            <h3 className="font-medium mb-2">Key Publications</h3>
            <ul className="space-y-3">
              {keyPublications.map((pub, index) => (
                <li key={index}>
                  <p className="font-medium">{pub.title}</p>
                  <p className="text-gray-700 text-sm">{pub.authors}</p>
                  <p className="text-gray-600 text-sm italic">{pub.venue}</p>
                  <Link to={pub.link} className="text-blue-600 hover:text-blue-800 text-sm">
                    View Publication
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Research;
