def sosu(maxNumber):
    for i in range(2,maxNumber+1):
        for j in range(2,i+1):
            if i!=j:
                if i%j == 0:
                    break;
            else:
                print(str(i))

maxNum = input("몇까지 소수를 구하시겠습니까?")
sosu(int(maxNum))