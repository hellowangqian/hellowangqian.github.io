This package consists of all the data used in the paper:
Qian Wang, Ke Chen, Alternative Semantic Representations for Zero-Shot Human Action Recognition, ECML-PKDD 2017

1. If you only want to use the semantic representations described in the paper, you can find them in the matlab files, i.e., [dataset]_imageSemantics.mat, [dataset]_textSemantics.mat

2. If you want to use the text resources from which our text-based representations are derived, you can find them in hmdb51_texts.zip and ucf101_texts.zip

3. If you want to use the image resources to extract image-based representations, we provide the extracted googlenet features for the collected images: [dataset]_image_googlenet_features.mat
However we cannot provide the raw images due to the limited drive space and potential copyright issues, instead, we provide our tool to scrape images from the search results.
The image scraper tool is adapted from: https://github.com/NikolaiT/GoogleScraper
All the credits should go to the author Nikolai!

4. The code used in this work can be found at: staff.cs.manchester.ac.uk/~kechen/BiDiLEL (password: hello1234)

5. Any further question regarding the paper or data, please contact me:
qian.wang@manchester.ac.uk 
