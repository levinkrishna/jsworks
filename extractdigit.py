num=123
stk=[]

while(num!=0):
    digit=num%10
    stk.append(digit)
    num=num//10

stk.reverse()
for n in stk:
    print(n,end=",")