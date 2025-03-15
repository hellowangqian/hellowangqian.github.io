
export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'journal' | 'conference' | 'book' | 'thesis' | 'workshop' | 'preprint';
  tags: string[];
  pdf?: string;
  doi?: string;
  slides?: string;
  link?: string;
  code?: string;
}

// This is a sample dataset - you would replace this with your actual publications
// For GitHub Pages, you can edit this file directly in the repository
export const publications: Publication[] = [
  {
    title: "Deep Learning for Real-time Object Detection in Autonomous Vehicles",
    authors: "Jane Researcher, Alan Smith, Benjamin Lee",
    venue: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: 2023,
    type: "conference",
    tags: ["object detection", "autonomous vehicles", "deep learning"],
    pdf: "#pdf-link",
    slides: "#slides-link",
    code: "https://github.com/janeresearcher/deep-object-detection"
  },
  {
    title: "Multi-scale Feature Pyramid Networks for Accurate Object Localization",
    authors: "Jane Researcher, Christopher Wilson",
    venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    year: 2023,
    type: "journal",
    tags: ["feature pyramids", "object detection", "CNN"],
    pdf: "#pdf-link",
    doi: "10.1109/TPAMI.2023.12345"
  },
  {
    title: "Neural Architecture Search for Efficient Deep Learning Models",
    authors: "Jane Researcher, David Johnson, Maria Garcia",
    venue: "International Conference on Machine Learning (ICML)",
    year: 2022,
    type: "conference",
    tags: ["neural architecture search", "model efficiency", "AutoML"],
    pdf: "#pdf-link",
    slides: "#slides-link",
    link: "#project-page-link"
  },
  {
    title: "Adversarial Training Methods for Robust Visual Perception",
    authors: "Jane Researcher, Robert Brown",
    venue: "Neural Information Processing Systems (NeurIPS)",
    year: 2022,
    type: "conference",
    tags: ["adversarial training", "robustness", "visual perception"],
    pdf: "#pdf-link",
    code: "https://github.com/janeresearcher/adversarial-training"
  },
  {
    title: "A Survey of Deep Learning Approaches for Autonomous Driving Systems",
    authors: "Jane Researcher, Susan Miller, Thomas Wang",
    venue: "ACM Computing Surveys",
    year: 2021,
    type: "journal",
    tags: ["survey", "autonomous driving", "deep learning"],
    pdf: "#pdf-link",
    doi: "10.1145/3439738"
  },
  {
    title: "Attention Mechanisms for Visual Understanding in Low-light Conditions",
    authors: "Jane Researcher, Michael Clark",
    venue: "European Conference on Computer Vision (ECCV)",
    year: 2021,
    type: "conference",
    tags: ["attention mechanisms", "low-light", "visual understanding"],
    pdf: "#pdf-link",
    slides: "#slides-link"
  },
  {
    title: "Edge Computing for Real-time Vision Applications",
    authors: "Jane Researcher, Lisa Chen, Omar Patel",
    venue: "ACM/IEEE Symposium on Edge Computing",
    year: 2020,
    type: "conference",
    tags: ["edge computing", "real-time vision", "embedded systems"],
    pdf: "#pdf-link",
    slides: "#slides-link"
  },
  {
    title: "Efficient Deployment of Vision Models on Resource-Constrained Devices",
    authors: "Jane Researcher, Kevin Zhang",
    venue: "Workshop on Machine Learning for Mobile and Embedded Systems",
    year: 2020,
    type: "workshop",
    tags: ["model compression", "embedded vision", "efficient inference"],
    pdf: "#pdf-link"
  },
  {
    title: "Robust Feature Extraction for Visual SLAM in Dynamic Environments",
    authors: "Jane Researcher, Rachel Adams",
    venue: "International Journal of Computer Vision",
    year: 2019,
    type: "journal",
    tags: ["SLAM", "dynamic environments", "feature extraction"],
    pdf: "#pdf-link",
    doi: "10.1007/s11263-019-01234-x"
  },
  {
    title: "Computer Vision Algorithms for Autonomous Systems",
    authors: "Jane Researcher",
    venue: "PhD Thesis, University of Technology",
    year: 2018,
    type: "thesis",
    tags: ["computer vision", "autonomous systems", "PhD thesis"],
    pdf: "#pdf-link",
    link: "#university-repository-link"
  }
];
