$(document).ready(function(){
				
				$('#check_student').show();
				$('#check_teacher').hide();
				
				$(".check_radio").click(function(){
					 var tmp = $(this).val();
					 
					 if( tmp != "teacher" ){
						$('#check_student').show();
						$('#check_teacher').hide();
					 } else {
						$('#check_student').hide();
						$('#check_teacher').show();
					 }
				});
				$("#form_n_snslink").show();										
				$("#facebook_login").hide();
				$("#kakao_login").hide();
				$("#naver_login").hide();	
				$("#register").hide();
				
				$("#f_login").click(function(){						
					$("#form_n_snslink").toggle();
					$("#facebook_login").toggle();
					$("#login_back_f").click(function(){
						$("#facebook_login").hide();									
						$("#form_n_snslink").show();							
					});					
				});
				$("#k_login").click(function(){						
					$("#form_n_snslink").toggle();
					$("#kakao_login").toggle();
					$("#login_back_k").click(function(){
						$("#form_n_snslink").show();
						$("#kakao_login").hide();									
					});
				});
				$("#n_login").click(function(){						
					$("#form_n_snslink").toggle();
					$("#naver_login").toggle();						
					$("#login_back_n").click(function(){
						$("#form_n_snslink").show();
						$("#naver_login").hide();									
					});
				});
				$("#reg").click(function(){						
					$("#form_n_snslink").toggle();
					$("#register").toggle();
					$("#login_back_r").click(function(){
						$("#form_n_snslink").show();
						$("#register").hide();									
					});
				});
					
			});