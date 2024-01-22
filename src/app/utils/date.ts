export const formatDateToBR = (dateString: string) => {
  // Reformatar a string de data para "YYYY/MM/DD"
  const reformattedDateString = dateString.split('-').reverse().join('/')

  // Criar um objeto Date com a string reformulada
  const data = new Date(reformattedDateString)

  // Verificar se a conversão foi bem-sucedida
  if (isNaN(data.getTime())) {
    return 'Data inválida'
  }

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(data)
}
