from datetime import datetime

def siple_numbers(a):
  res_list = [1,]
  num = 1000
  
  for i in range(1, num + 1):
    counter = 0
    for j in range(1, i + 1):
      if i % j == 0:
        counter += 1
    if counter == 2:
      res_list.append(i)
  
  print(res_list[:a])

start = datetime.now()
siple_numbers(100)
end = datetime.now()
print(end - start)