const tabs = document.querySelectorAll(".tabs-btn");
const contents = document.querySelectorAll(".tabs-content");

tabs.forEach((tab, start) => {
    tab.addEventListener("click", () => {
    contents.forEach((matter) => {
        matter.classList.remove("tab-active");
    });
    tabs.forEach((tab) => {
        tab.classList.remove("tab-active");
    });

    contents[start].classList.add("tab-active");
    tabs[start].classList.add("tab-active");
    });
});

