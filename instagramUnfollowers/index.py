import sys
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.chrome.options import Options

options = webdriver.ChromeOptions()
# options.add_argument('--headless')
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')
options.add_argument("") #Path to your chrome profile
browser = webdriver.Chrome(executable_path="", options=options) #Path to your chrome driver

# browser.get("https://www.instagram.com/accounts/login/?source=auth_switcher")
#
# time.sleep(1)
#
# username = browser.find_element_by_class_name("_2hvTZ")
# password = browser.find_elements_by_class_name("_2hvTZ")[1]
# login = browser.find_element_by_class_name("Igw0E")
#
# username.send_keys("")
# password.send_keys("")
# time.sleep(1)
# login.click()
#
# time.sleep(2)

browser.get("https://www.instagram.com/username/")

time.sleep(2)

numberOfFollowers = browser.find_elements_by_class_name("g47SY")[1]
actualNumberOfFollowers = int(numberOfFollowers.get_attribute("title"))

print(actualNumberOfFollowers)
sys.stdout.flush()

followers = browser.find_element_by_css_selector("ul li a")
followers.click()

time.sleep(1)

scroll = browser.find_element_by_xpath("/html/body/div[2]/div/div[2]")

followersList = browser.find_element_by_css_selector('div[role=\'dialog\'] ul')
numberOfFollowersInList = len(followersList.find_elements_by_css_selector('li'))

j = 0
while (numberOfFollowersInList < actualNumberOfFollowers -1):
    browser.execute_script("arguments[0].scrollTop = arguments[1];", scroll, 100 + j)
    if j == 300:
        time.sleep(1)
    numberOfFollowersInList = len(followersList.find_elements_by_css_selector('li'))
    print(numberOfFollowersInList)
    sys.stdout.flush()
    j += 100

time.sleep(1)

print("Array start")
sys.stdout.flush()

followersNames = []
for user in followersList.find_elements_by_class_name('FPmhX'):
    username = user.text
    followersNames.append(username)
    if (len(followersNames) == actualNumberOfFollowers):
        break

print(len(followersNames))

close = browser.find_element_by_css_selector("body > div.RnEpo.Yx5HN > div > div:nth-child(1) > div > div:nth-child(3) > button > span")
close.click()

following = browser.find_elements_by_css_selector("ul li a")[1]
following.click()

scrollSecond = browser.find_element_by_xpath("/html/body/div[2]/div/div[2]")

numberOfFollowing = browser.find_elements_by_class_name("g47SY")[2]
actualNumberOfFollowing = int(numberOfFollowing.text)

followingList = browser.find_element_by_css_selector('div[role=\'dialog\'] ul')
numberOfFollowingInList = len(followingList.find_elements_by_css_selector('li'))

j = 0
while (numberOfFollowingInList < actualNumberOfFollowing - 1):
    browser.execute_script("arguments[0].scrollTop = arguments[1];", scrollSecond, 100 + j)
    if j == 300:
        time.sleep(1)
    numberOfFollowingInList = len(followingList.find_elements_by_css_selector('li'))
    print(numberOfFollowingInList)
    sys.stdout.flush()
    j += 100

time.sleep(1)
print("Array start")
sys.stdout.flush()

followingNames = []
for user in followingList.find_elements_by_class_name('FPmhX'):
    usernameFollowing = user.text
    followingNames.append(usernameFollowing)
    if (len(followingNames) == actualNumberOfFollowing):
        break

print(len(followingNames))

print("Difference:")
difference = list(set(followingNames) - set(followersNames))
print(difference)

with open('followers.txt', 'w') as f:
    for follower in followersNames:
        f.write("%s\n" % follower)

with open('following.txt', 'w') as f:
    for following in followingNames:
        f.write("%s\n" % following)

with open('difference.txt', 'w') as f:
    for userDifference in difference:
        f.write("%s\n" % userDifference)

browser.quit()