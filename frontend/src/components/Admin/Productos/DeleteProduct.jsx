import React,{useState} from 'react'

const DeleteProduct = () => {
  //#region 
  let base64String=''

  const Uploaded = (e)=>{
    const file = document.querySelector(
      'input[type=file]')['files'][0];
    let reader = new FileReader();
    reader.onload = function () {
      base64String = reader.result.replace("data:","")
        .replace(/^.+,/, "");
    }
    reader.readAsDataURL(file);
  }
  //#endregion

  return (
    <div>
      <from >      
        <input type='file' name='image' id='image' onChange={Uploaded} multiple/>
      </from>
    </div>
  )
}

export default DeleteProduct