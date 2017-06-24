from selenium import webdriver
from bs4 import BeautifulSoup
import time

def instagram():
    open("img_links", "w").close()

    browser = webdriver.Firefox()
    browser.get("https://www.instagram.com/accounts/login/")
    time.sleep(2)

    username = browser.find_element_by_class_name("_kp5f7")
    password = browser.find_element_by_css_selector("._1mdqd")

    username.send_keys("")
    password.send_keys("")

    login = browser.find_element_by_css_selector("._ah57t")
    login.click()

    browser.get("https://www.instagram.com/markwahlberg/")

    loadMore = browser.find_element_by_css_selector("._8imhp")
    loadMore.click()

    i = 1
    while i < 1000:
        browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        i+=1

    innerHTML = browser.execute_script("return document.body.innerHTML")
    soup = BeautifulSoup(innerHTML, "lxml")

    for image in soup.findAll("img"):
        image_source = image.get("src")
        fw = open("img_links", "a")
        fw.write(image_source+"\n")
        fw.close()

instagram()
