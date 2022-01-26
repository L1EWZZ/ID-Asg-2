/*using restdb.io to allow student to enter contact infor, store and display on screen*/
$(document).ready(function () {
    const APIKEY = "61d29a05ccd0211b32089585";
    getContacts();
    $("#update-contact-container").hide();
    $("#add-update-msg").hide();
    $("#delete-contact-container").hide();
    $("#delete-student-msg").hide();
    
  
    $("#contact-submit").on("click", function (e) {
      e.preventDefault();
  
      let studentName = $("#student-name").val();
      let studentID = $("#student-id").val();
      let studentMentor = $("#student-mentor").val();
      let studentClass = $("#student-class").val();
      let studentEmail = $("#student-email").val();
      let mentorEmail = $("#mentor-email").val();
  
      let jsondata = {
        "studentname": studentName,
        "studentid": studentID,
        "studentmentor": studentMentor, 
        "studentclass": studentClass,
        "studentemail": studentEmail,
        "mentoremail": mentorEmail
      };
  
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://studentcrud-2d64.restdb.io/rest/studentcrudentials",
        "method": "POST", //[cher] we will use post to send info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function(){
          $("#contact-submit").prop( "disabled", true);
          $("#add-contact-form").trigger("reset");
        }
      }
  
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#contact-submit").prop( "disabled", false);
        
        $("#add-update-msg").show().fadeOut(3000);
  
        //update our table 
        getContacts();
      });
    });//end click 
  
  
    function getContacts(limit = 10, all = true) {
  
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://studentcrud-2d64.restdb.io/rest/studentcrudentials",
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
      }
  
      $.ajax(settings).done(function (response) {
        
        let content = "";
  
        for (var i = 0; i < response.length && i < limit; i++) {
          content = `${content}<tr id='${response[i]._id}'>
          <td>${response[i].studentname}</td>
          <td>${response[i].studentemail}</td>
          <td>${response[i].studentid}</td>
          <td>${response[i].studentmentor}</td>
          <td>${response[i].studentclass}</td>
          <td>${response[i].mentoremail}</td>

          <td><a href='#' class='delete' data-id='${response[i]._id}'
          
          >Del</a></td>

          <td><a href='#update-contact-container' class='update' data-id='${response[i]._id}'
          data-id='${response[i]._id}' 
          data-name='${response[i].studentname}' 
          data-email='${response[i].studentemail}'
          data-student-id='${response[i].studentid}'
          data-mentor='${response[i].studentmentor}'
          data-class='${response[i].studentclass}'
          data-mentoremail='${response[i].mentoremail}'
          >Update</a></td></tr>`;
        }
  
        $("#contact-list tbody").html(content);
  
        $("#total-contacts").html(response.length);
      });
    }

   
  
    $("#contact-list").on("click", ".update", function (e) {
      e.preventDefault();
      let studentName = $(this).data("name");
      let studentEmail = $(this).data("email");
      let studentID = $(this).data("student-id");
      let studentMentor = $(this).data("mentor");
      let studentClass = $(this).data("class");
      let mentorEmail = $(this).data("mentoremail");
      let studentObject = $(this).data("id");
  
      $("#update-contact-name").val(studentName);
      $("#update-contact-email").val(studentEmail);
      $("#update-contact-ID").val(studentID);
      $("#update-contact-mentor").val(studentMentor);
      $("#update-contact-class").val(studentClass);
      $("#update-contact-mentorMail").val(mentorEmail);
      $("#update-contact-object").val(studentObject);
      $("#update-contact-container").show();
  
    });//end contact-list listener for update function
  
    $("#update-contact-submit").on("click", function (e) {
      e.preventDefault();
      let studentName = $("#update-contact-name").val();
      let studentEmail = $("#update-contact-email").val();
      let studentID = $("#update-contact-ID").val();
      let studentMentor = $("#update-contact-mentor").val();
      let studentClass = $("#update-contact-class").val();
      let mentorEmail = $("#update-contact-mentorMail").val();
      let studentObject = $("#update-contact-object").val();
  
      console.log($("#update-contact-name").val());
      console.log(studentName);

      updateForm(studentObject ,studentName, studentEmail, studentMentor, studentClass, studentID, mentorEmail);
    });//end updatecontactform listener
  
    //UPDATE Based on the ID chosen
    function updateForm(id, studName, studMail, stuMentor, stuClass, stuID, mentorEmail) {

      var jsondata = {
      "studentobject": id,
      "studentname": studName, 
      "studentemail": studMail, 
      "studentmentor": stuMentor,  
      "studentclass": stuClass,  
      "studentid": stuID, 
      "mentoremail": mentorEmail};
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://studentcrud-2d64.restdb.io/rest/studentcrudentials/${id}`,//update based on the ID
        "method": "PUT",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
      }
  
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#update-contact-container").fadeOut(5000);
        //update our contacts table
        getContacts();
      });
    }//end updateform function
  

    $("#contact-list").on("click", ".delete", function (e) {
      e.preventDefault();
      console.log("delete");
      let studentObject = $(this).data("id");
      $("#delete-contact-container").show();
      deleteRecord(studentObject);
      $("#delete-student-msg").show().fadeOut(3000);
      $("#delete-contact-container").fadeOut(5000);
    });



    function deleteRecord(id) {
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": `https://studentcrud-2d64.restdb.io/rest/studentcrudentials/${id}`,
          "method": "DELETE",
          "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
          }
        }
        
        $.ajax(settings).done(function (response) {
          console.log(response);
          getContacts();
        });
      }
    }
  ,)
  