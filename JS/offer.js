
  $(document).ready(function() {
   
        $(window).scroll( function(){
   

   

            $('.offers_card').each( function(index){

                var bottom_of_element = $(this).offset().top -  $(window).height();
   
                var bottom_of_window = $(window).scrollTop() + $(window).height();
    
   
                if( bottom_of_window >= bottom_of_element ){
 
                    $(this).delay( index * 200 ).animate({'opacity':'1','margin-top':'0px'},600)
             
                }
   
            });
    
        });

      

        $(window).scroll( function(){
            $('.eshop_card ').each( function(index){

                var bottom_of_element = $(this).offset().top -  $(window).height();
   
                var bottom_of_window = $(window).scrollTop() + $(window).height();
    
   
                if( bottom_of_window >= bottom_of_element ){
 
                    $(this).delay( index * 200 ).animate({'opacity':'1','margin-top':'0px'},1500)
             
                }
   
            });
    
        });



        $(window).scroll( function(){
   

   

            $('.card_reward-container').each( function(){

                var bottom_of_element = $(this).offset().top -  $(window).height();
   
                var bottom_of_window = $(window).scrollTop() + $(window).height();
    
   
                if( bottom_of_window >= bottom_of_element ){

                    $('.card_reward').show();
                    $('.card_reward-container').css({'width':'100%'});
                    $(this).animate({'opacity':'1','margin-left':'0px', 'display':'flex'},4000)
             
                }
   
            });
    
        });




        $(window).scroll( function(){
            $('.single_card_csr ').each( function(index){

                var bottom_of_element = $(this).offset().top -  $(window).height();
   
                var bottom_of_window = $(window).scrollTop() + $(window).height();
    
   
                if( bottom_of_window >= bottom_of_element ){
 
                    $(this).delay( index * 250 ).animate({'opacity':'1','margin-top':'0px'},1500)
             
                }
   
            });
    
        });




        $(window).scroll( function(){
            $('.icon_container_help').each( function(){

                var bottom_of_element = $(this).offset().top ;
   
                var bottom_of_window = $(window).scrollTop() + $(window).height();
    
   
                if( bottom_of_window >= bottom_of_element ){
 
                    $(this).animate({'opacity':'1','margin-top':'0px'},1000)
             
                }
   
            });
    
        });


        $(window).scroll( function(){
            $('.title_help').each( function(){

                var bottom_of_element = $(this).offset().top ;
   
                var bottom_of_window = $(window).scrollTop() + $(window).height();
    
   
                if( bottom_of_window >= bottom_of_element ){
 
                    $(this).animate({'opacity':'1','margin-top':'0px'},1000)
             
                }
   
            });
    
        });

     

        

        $(window).scroll( function(){
            $('.center_image_help').each( function(){

                var bottom_of_element = $(this).offset().top ;
   
                var bottom_of_window = $(window).scrollTop() + $(window).height();
    
   
                if( bottom_of_window >= bottom_of_element ){
 
                    $(this).animate({'opacity':'1','margin-top':'0px'},1500)
             
                }
   
            });
    
        });
       
    

       

       $('.circle_arrow')("click", () => {
            $(this).addClass("circle_arrow--loading");
        });



    });
    



