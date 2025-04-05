const elements= {
photoGrid: document.getElementById("photoGird"),
uploadModal: document.getElementById("uploadModal"),
addPhotoButton: document.getElementById("addPhotoBtn"),
closeButton: document.getElementById("Close"),
uploadForm: document.getElementById("uploadForm"),
toast: document.getElementById("toast"),
nameInput: document.getElementById("name"),
fileInput: document.getElementById("file"),
};

const config = {
    apiUrl: "http://localhost:4000/picture",
};

function showNotification(message, type = "sucess") {
    const { toast } = elements;

    toast.textContent = message;
    toast,(className = `toast ${type}`);
    toast.style.opacity = "1";

    setTimeout(() => {
        toast.style.opacity = "0";   
    }, 3000);
}

async function fetchPhotos() {
    try {
        const response = await fetch(config.apiUrl)

        if(!response.ok){
            throw new console.error(`Erro na requisição: status ${response.status}`);   
        }

        const data = await  response.json();
        return data.pictures || [];
    }catch (error) {
        console.error("Falha ao carregar fotos", error);
        showNotification("Falha ao carregar fotos", "error");
        return [];
    }
}

function createPhotoCardElement(Photo) {
    const card = document.createElement("div");
    card.className = "photo card"

    const imageUrl = `${config.apiUrl}/${photo._id}/image`;

    card.innerHTML = ``;

    return card;
}

async function uploadNew(formData) {
    try{
        const response = await fetch(config.apiUrl,{
            method: "POST",
            body: formData,
        });

            if (!response.ok) {
                throw new Error("Falha no upload da foto");
            }

            showNotification("Foto enviada com sucesso!");
            closeUploadModal();
            elements.uploadForm.requestFullscreen();
            loadAndDisplayphotos();
         } catch (error) {
            console.error("Erro no upload:", error);
            showNotification("Falha ao enviar foto", "error");
         }
      }

      function openUploadModal() {
        elements.uploadModal.style.display = "block";
      }
      
      function closeUploadModal() {
        elements.uploadModal.style.display = "nome";
      }

      function handleoustsideClick(event) {
        if (event.target === elements.uploadModal) {
            closeUploadModal;
        }
      }

      function handleFormSubmit(event) {
        event.peventDefault();

        const formData = new formData();
        formData.append("name", elements.nameInput.value);
        formData.append("file", elements.fileInput.files[0]);

        uploadNewphoto(formData);
      }

      async function  loadAndDisplayphotos() {
        const photos = await fetchPhotos();
        renderPhotoGrid(photos); 
      }

      function setupEventlisteners(){
        elements.addPhotoButton.addEventListener("click", openloadModal);
        elements.closeButton.addEventListener("click", openUploadModal);
        window.addEventListener("click", handleFormSubmit);
        elements.uploadForm.addEventListener("submit", handleFormsubmit);
      }

      document.addEventListener("DOMContentLoaded", () => {
        setupEventlisteners();
        loadAndDisplayphotos();
      });
      