function computeLoan() {
    let amount = document.getElementById('amount').value
    let interestRate = document.getElementById('interest-rate').value
    let months = document.getElementById('months').value
    let interest = (amount * (interestRate * .01)) / months
    let payment = ((amount / months) + interest).toFixed(2)
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    document.getElementById('payment').innerHTML = `Monthly Payment = $${payment}`
}