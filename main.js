var name_array =[]
function submit(){
    for (i = 1; i <= 4; i++ ){
        var name_student = document.getElementById("name_of_the_student_"+ i).value;
        name_array.push(name_student)
    
    }
    for (j = 0; j<= 3; j++){
        document.getElementById("display_name_with_commas").innerHTML+="<h2> Name:"+name_array[j]+"<br></h2>"
    }
    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"

}
function sorting(){
    name_array.sort()
    for (j = 0; j<= 3; j++){
        document.getElementById("display_name_without_commas").innerHTML+="<h2> Name:"+name_array[j]+"<br></h2>"
    }
    document.getElementById("submit_button").style.display="inline-block"
    document.getElementById("sort_button").style.display="none"

}