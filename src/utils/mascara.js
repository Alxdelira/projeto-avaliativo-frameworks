export const formatData = (data) => {

    const dataFormat = new Date(data);
  
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    }
  
    const dataForFormat = dataFormat.toLocaleDateString("pt-br", options);
  
    const [dia, mes, ano] = dataForFormat.split("/")
  
    return `${ano}-${mes}-${dia}`
  }
  