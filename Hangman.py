import random


fp = open("wordList.txt", "rt")
wordList = fp.read().split()
global wordCount
wordCount = ""
randomNumber = random.randint(0,len(wordList))
strikes = ["+---+\n|   |\n|\n|\n|\n=========", "+---+\n|   |\n|   0\n|\n|\n=========", "+---+\n|   |\n|   0\n|   |\n|\n=========", "+---+\n|   |\n|   0\n|  /|\n|\n=========", "+---+\n|   |\n|   0\n|  /|\ \n|\n=========", "+---+\n|   |\n|   0\n|  /|\ \n|  /\n=========", "+---+\n|   |\n|   0\n|  /|\ \n|  / \ \n========="]
correct = []
incorrect = []


def randomWord():
    wordCount = ""
    x=0
    if yes == 0:
        while x < len(word):
            wordCount = wordCount + "- "
            x +=1
    if yes > 0:
        while x < len(word):
            if word[x] in correct:
                wordCount = wordCount + word[x]
            else:
                wordCount = wordCount + "- "
            x +=1
    print("Word: " + wordCount)


def gameStart():
    global yes
    global no
    yes = 0
    no = 0
    global word
    word = wordList[randomNumber]
    while yes < len(word):
        print(word)
        print("Incorrect Guesses: " + str(incorrect))
        if no < 6:
            print(strikes[no])
        else:
            print(strikes[no])
            print("You Lose!")
            print("Answer: " + word)
            break
        randomWord()   
        if yes < len(word):
            guess = input("Guess a letter: ")
        if guess in word:
            correct.append(guess)
            yes +=1
        else:
            incorrect.append(guess)
            no +=1
    if yes == len(word):
        print("You Win!")
gameStart()
