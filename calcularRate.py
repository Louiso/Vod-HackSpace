import numpy as np

x = np.array([[16,32,48,64,80,96,112,128,144,160,176,192,208,224,240,256,272,288]])
n = len(x[0])
y = np.array([[466,1003,1537,2069,2608,3139,3682,4212,4754,5292,5818,6356,6898,7427,7970,8503,9036,9569]])

num_coe = 2

x_n = []
for i in range(num_coe-1,0,-1):
  x_n.append((x**i).transpose())

x_n.append(np.ones([n,1]));

A = np.hstack(x_n)

AT = A.transpose()

X = np.linalg.inv(AT.dot(A)).dot(AT.dot(y.transpose()))

print(X)
y = X[0][0]
x = 1600
for i in range(1,len(X)):
  y = (y * x + X[i][0])

print(y)

# 33.48329463
# -70.62745098