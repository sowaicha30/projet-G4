function openModal(ImageUrl){
    var modal=document.getElementById('myModal');
    var modalImg=document.getElementById('modalImage');
    modal.style.display="block";
    modalImg.src=ImageUrl;

}
function closeModal(){
    var modal=document.getElementById('myModal');
    modal.style.display="none";


}