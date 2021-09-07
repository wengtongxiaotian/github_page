import os,sys,shutil

name_list = ['chenxiangdong','dongyang','zhengyu','fengce','dubo','zhangshaochun','linhaobin','wangzehao','tianyuan','wangqiyu','wangenhui','shanlongkun','jiangwang','liulvhang','wengtongtian']
file_path = './public/'
# file_path = './src/pages/'
for name in name_list:
    shutil.copyfile(file_path+'moban.jpg',file_path+name+'.jpg')