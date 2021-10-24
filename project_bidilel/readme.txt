The code is the implementation of zero-shot learning based on the "bidirectional latent embedding" framework in the following paper:
Qian Wang, Ke Chen, Zero-Shot Visual Recognition via Bidirectional Latent Embedding. arXiv:1607.02104
Please cite this paper if you use the codes or data in this package.


-------------- Overview -----------------
The algorithm is implemented in matlab.
We have tested the codes with the following MATLAB versions: R2013a on Windows and R2015a on Linux.
Running the codes on different datasets requires different amounts of RAM, for UCF101,HMDB51 and CUB-200-211, a 24G RAM is enough, but AwA needs more.
For a quick start, you can run the example scripts for training and test. We provide example scripts for different settings. 
Please refer to the following sections for details. 


-------------- Codes --------------------
Password: hello1234
example_[dataset]_[visRep]_[dataSplits].m
Run this script file to start. You can modify the parameters, the source data in this file.

zsl_bidiLEL.m
We also provide this interface function to run the experiment with different datasets/representations/splits
Input variables
 dataset:    a string specifying dataset name, depends on how you name the .mat files
             (e.g., 'awa50', 'ucf101', 'hmdb51', 'cub200');
 visRep:     a string specifying the type of visual representations
             (e.g., 'googlenet', 'vgg19', 'idt', 'c3d');
 semRep:     a string specifying the type of semantic representations
             (e.g., 'wordvector', 'attributes', 'combination');
 dataSplits: a string specifying the data splits
             (e.g., '40_10' for awa50, '81_20' and '51_50' for ucf101);
 opts:       specifying the values of hyper-parameters 
             (by default the optimal values used  in the paper will be used).
                   dy:     subspace dimensionality
                   alpha:  regularisation parameter
                   kG:     kNN for graph construction in SLPP
                   k_st:   kNN for self-training
                   gamma:  for semantic representations combination 
				   initB:  'random'-for ture random;'preStored'-for repeatable results
                           with pre-stored random initialisation
                   preTrain: true-using pre-trained bottom-up projection P
                             to save some time (not significantly);
                             false (default)

 Output variables
 res:      a n-dimensional vector of zero-shot accuracy for n different splits, n is
           the number of data splits
 res_st:   a n-dimensional vector of zero-shot accuracy with self-training
           for n different splits
 Usage
 1. use default hyper-parameters: [res, res_st] = zsl_bidiLEL('ucf101', 'c3d', 'attributes', '51_50');
 2. specify hyper-parameters: [res, res_st] = zsl_bidiLEL('ucf101', 'c3d', 'attributes', '51_50',opts);
 3. for the combination of multiple visual representations, one can simply add new feature matrices into feature.Data{}.

codes/bottomUp_subspace_learning.m
The script file for latent subspace learning. Other processes like top-down learning and recognition are also called in this file.
You can modify the variable name for the results.

codes/bottomUp_alternative_ssl.m
The script file for learning subspace with alternative algorithms, i.e., LPP, PCA, LDA

codes/topDown_latEmbeddings_learning.m
learn the latent embeddings for test classes B_te.

codes/constructW.m codes/constructKernel.m codes/EuDist2.m
These functions files are downloaded from: http://www.cad.zju.edu.cn/home/dengcai/Data/DimensionReduction.html

codes/semi_sammon.m
The implementation of Landmarks based Sammon's Mapping, adapted from the original version: http://theoval.cmp.uea.ac.uk/~gcc/matlab/#sammon

codes/self_training.m
The implementation of self-training strategy. The adjusted latent embeddings are denoted as B_te_st.


-------------- Data ----------------------
There are 5 subfolders in ./data/ containing data needed in the experiments. Details are as follows.
directory   : ./data/visual_representations/
files       : [dataset]_c3d.mat, [dataset]_idt.mat, [dataset]_googlenet.mat, [dataset]_vgg19.mat
variables   : feature.Data{m}   contains a representation matrix with rows of instances.
              allLabels         contains corresponding labels (1~NumOfClassess).

directory   : ./data/semantic_representations/
files       : [dataset]_semantics.mat
variables   : attributes        contains attributes based semantic representations for C classes used in the paper, each row represents one class.
              wordvector        contains wordvectors based semantic representations for C classes used in the paper, each row represents one class.

directory   : ./data/data_splits/
files       : [dataset]_zsl_splits_x_y.mat (x,y denotes the number of training and test classes respectively)
variables   : train_class_set   contains numberOfTrials rows, each row has numberOfClass binary-valued elements with 1 indicating training class and 0 indicating zero-shot class
              test_class_set    contains numberOfTrials rows, each row has numberOfClass binary-valued elements with 1 indicating zero-shot class and 1 indicating training class

directory   : ./data/pre_stored_initialisation/
files       : fixedInitialB.mat
variables   : initialBForAllDatasets.[dataset]_[dataSplits]
                                contains pre-stored randomly generated initialisation of B for top-down embedding
                                only for repeatable experiment results.

directory   : ./data/pre_trained_projection/
files       : [dataset]_[visRep]_[dataSplits]_P.mat
variables   : P                 contains numberOfTrials cells, each cell is a projection matrix pre-learned.

Go to our website for more data used in the paper: http://www.cs.man.ac.uk/~kechen/

------- Apply to a new dataset ------------
It is easy to experiment on new datasets. One just need to structure the necessary data in a proper format, and call the function zsl_BiDiLEL.


-------------- Contacts -------------------
Qian Wang
qian.wang@manchester.ac.uk
