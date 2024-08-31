document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".container")
    const copyBtn = document.getElementById("btnCopy")
    const allBorder = document.getElementById("all")
    const allValue = document.getElementById("allValue")
    const border_value = document.getElementById("border_all_value")
    const border_px = document.getElementById("border_value")
    const code = document.getElementById("code")
    const select_style = document.getElementById("select-style")

    var allradius = 10;
    var allborder=10;
    var border_style = "solid"
    var coding = ""

    allBorder.addEventListener("mousemove", allBorderUpdate)
    allBorder.addEventListener("change", allBorderUpdate)

    border_value.addEventListener("mousemove", allBordervalueUpdate)
    border_value.addEventListener("change", allBordervalueUpdate)

    copyBtn.addEventListener("click", () => {
        document.querySelector("textarea").select()
        document.execCommand("copy")
        alert("code copied!")
    })

    function allBorderUpdate() {
        allradius = allBorder.value
        allValue.innerHTML = allradius + "px"
        coding = `border-radius:${allradius}px;
border:${allborder}px ${border_style} red`
        code.value = coding;
        container.style.cssText = coding
    }

    select_style.addEventListener("change", function () {
        border_style = this.value;
        allBorderUpdate()

    })
     
    function allBordervalueUpdate(){
        allborder=border_value.value;
        border_px.innerHTML=allborder+"px"
        allBorderUpdate()

    }

    allBorderUpdate()
})