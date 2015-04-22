import time

counter = 0
for i in range(0, 7):
    time.sleep(1)
    print "flashing device... {}".format(counter)
    counter = counter + 1
