

$().ready(function() {
    $(function() {
        // $("#form").validate();
    
        $("#form").submit(function(e) {
            e.preventDefault();
    
            var display = 
    
            $("#name").val()+ " "+ 
             
            $("#email").val()+ " "+
            $("#mobile").val()+ " "+
            $("#age").val()+ " "+
            $("#profile").val()+ " "+
            $("#address").val()+ " ";
                    
    
    
            $("#result").html(display);
        });
   
    
    
    $("#form").validate({
  
        rules : {
          
            name : {
              
              required : true
            },
            email : {
                required : true,
                
                email : true
               
            },
            mobile : {
                required : true,
                minlength:10,
                maxlength:10,
                number: true
            },

            age : {
                required : true,
                number: true
            },
            
            profile : {
                required : true
               
            },
            address : {
                required : true
                
            }
           

           



        },
        
      
        messages: {
            name: "Enter you name",
            email: "Enter your valid email",
            mobile:"Enter a 10 digit number",
            profile:"Enter your profile",
            address:"Enter your address",
            age :"Enter your age in number",
            profile:"Profile is must",
            address:"Address is must"
        },
       
        submitHandler: function(form) {
            form.submit();
        }
        
    });
   
});
});