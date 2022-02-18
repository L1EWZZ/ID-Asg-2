# ID-Asg-2
                                                 ----------------------------
                                                 Inspiration and main details
                                                 ----------------------------
Upon viewing the Ngee Ann Poly webpage which displayed all the course available, my partner and i were reminded of the online open house which took place back when we first entered Ngee Ann, hence we were motivated to create an online interactive open house webpage which allows viewers to view the different courses of the ICT sector and the importance of programming in ICT. When designing, we had to imagine the viewers to be students or parents as they will be the ones who wish to view more about the courses under the ICT section. We also had to implement interesting activities such as a mini quiz and a lucky draw participation forum in order to gain the attention of viewers. Every open house webpage needs to have feedback to improve, hence we included a feedback section to note down the different feddbacks from viewers. Some objectives we achieved would include being able to use implment API in the recording of contact information and the usage of some Lottie animation to enhance visual interaction between viewers and the webpage.  

                                                     ----------------------
                                                     How the webpage works:
                                                     ----------------------
Viewers should be able to scroll up and down in landing page or go to the different sections by clicking on the different buttons in the navbar. Afterwards, users could go and view the different courses such as IM, CSF, DS and IT by clicking on the 4 different panels in the "Course" section. If they wish to they could also attend the mini quiz and participate in a lucky draw if they obtained full marks. At the end of the webpage, they could provide feedback by sending it through the last section called "Feedback".

                                                      ------------------
                                                      Table of contents:
                                                      ------------------
-- mainIndex.html would be the main landing page which includes a navbar with clickable buttons to go to the different sections, a real time two digit clock, a switch which when checked can turn off and on the lights of the motel image. To add on, there is a clickable button which brings users to top of the screen and a feedback section which stores feedback from users in google sheet.

[.] Porgramming is needed not only in courses of the ICT section but also in the real world where technology gets increasingly better, thus About section tells user why programming is important in real life scenario and why it will be needed in the different courses.

[.] Courses section will allow user to click on the different courses provided in ICT section and view more about them in the seperate webpages.

[.] Quiz section will allow view to click and pariticipate in a mini quiz about programming languages, whereby if they obtain full marks they can enter their names in a lucky draw forum.

[.] Feedback section will allow viewers to enter their names, email and feedback, where all information is sent and stored in google sheet to allow users to view. When user sends a feedback, message showing "Feedback has sent successfully!" will notify the viewer.
https://docs.google.com/spreadsheets/d/1_g9f3Kq5h5kfm3heWNsiSRBXYxteHQYn15QjGVE_AXk/edit?usp=sharing --> google sheet viewing link 

[.] The switch uses a javascript (mainIndex.js), when the checkbox is checked/clicked, it swicthes between two images one with lights on and the other with no lights. Two digit clock uses same javascript through setInterval method. Button which brings user to top of the screen uses same javascript, where it only appears when screen is scrolled to certain point and brings user to top of webpage when clicked.


-- APIContactForm.html uses API and allows viewers to type in thier contact information to store into restDB. A table of the names entered is only viewable to allow users to be able to know who to call or mail when contacting. This html page has been used as a lucky draw participation forum after users have obtained full marks for the mini quiz in Quiz.html. APIContactForm.html also uses Lottie animation for the loading animation, whereby it runs for a few seconds, afterwards disappearing, hence creating the loading effect.


-- cybersecurity.html is the webpage which allows viewers to read up on information about the cyber security course in Ngee Ann Poly. When doing this webpage, we immediately thought of having the matrix background since the matrix was linked to cyber security. In order to implement this, we had to use a new technique called Canvas, whereby it allows us to draw the graphics through scripting. The for loop in cybersurity.js will randomly send a row of letters and numbers to the top of the screen and allow it to come down, afterwards going back up and repeating the process. A link to the official Ngee Ann Poly website about the CSF course is also included, whereby when viewers click on the word they can view full information about the CSF course. A video is also included to preview the life of a CSF student.


-- datascience.html will allow viewers to view more about the data science course in the ICT sector. For animation of the appearing image, a new technique called keyframes animate is used to provide tiles animation. It essentially allows the tiles to animate "from" and "to". For this case it animated from 0%, to 50% and final stopping at 100%. A scroll in effect in also implemented, whereby when viewers scroll down to view more, information will slide in within seconds. Viewers can choose to watch the life of a data science student, or go the NP official website on data science to find out more. 


--immersivemedia.html also uses keyframes to animate the tiles animation of the now disappearing tiles image of the blue screen. A slideshow effect is also used to allow viewers to see what is there to offer in IM. Viewers can also choose to go to the ofiicial NP website on IM by clicking on the link provided in the webpage. 


--informationtechnology.html uses the read more read less inetraction and the buttons also have a hover and clickable effect before and after is clicked or hovered. Viewers can also choose to go to the ofiicial NP website on IT by clicking on the link provided in the webpage. 


--Quiz.html will be the webpage for viewers to take the mini quiz on the different programming languages. The questions are simple and essentially provide a chance for viewers to obtain full marks, where they will then be prompted to go to APIContactForm.html webpage to key in their contact details to participate in the lucky draw. Different functions are used to make this work and some functions would include a for loop which iterates through questions.js in order to show on the screen the different questions along with their respective options.
Some nice interactions included would also be a tick or cross image when viewers get a correct or wrong answer repectively.


When testing, some problems we ran into would be margins at the side appearing for no reason, being unable to print words on the Canvas background due to not knowing that z-index was needed when printing words on graphics designed by Canvas. Other problems would also include the google sheet not linking properly, hence feedback is not being sent to the appropriate google sheet. During the recording, minor errors such as going over the time limit and some messages such as "Feedback has sent successfully!" not appearing occurred frequestly, hence making us record more than once to obtain a proper presentation video on the webpage. 

                                                      --------------------------
                                                      Credits and Acknowlegment:
                                                      --------------------------
P.S Logan: 
    For creating the Immersive Media and Information Technology webpages and introducing the keyframes animation when we needed more interaction between viewers and the wbepage. 

Liew Zheng Zhang:
    For creating CSF and Data Science webpages and introducing Canvas to sync the matrix background idea together with cyber security. Also included the API contact form and the Lottie animations to improve visual interaction between viewer and webpage

Mrs Ong:
    For teaching API in class and allowing us to properly use it in this assignment. Also for introducing the function which allows different items such as Lottie animation to disappear after some time. 

Links:
    https://www.np.edu.sg/ict/Pages/it.aspx   -->  for obtaining some information on the IT course and the image in our IT wbepage 
    https://www.np.edu.sg/ict/Pages/csf.aspx  -->  for obtaining some information on the CSF course 
    https://www.np.edu.sg/ict/Pages/im.aspx   -->  for obtaining some information on the IM course
    https://www.np.edu.sg/ict/Pages/ds.aspx   -->  for obtaining some information on the DS course
    https://www.youtube.com/c/NgeeAnnPolyNP   --> for obtaining the videos on the life of a CSF and DS student 


                                                            -----------
                                                            Github Link
                                                            -----------
                                                https://l1ewzz.github.io/ID-Asg-2/
