const items = document.querySelectorAll('.item input[type="checkbox"]');
items.forEach(item => {
    item.addEventListener('change', function () {
        const quantityInput = this.parentElement.querySelector('input[type="number"]');
        quantityInput.disabled = !this.checked;
        atualizarCarrinho();
    });
});

function atualizarCarrinho() {
    const cartItems = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');
    let cartText = '';
    let total = 0;

    items.forEach(item => {
        if (item.checked) {
            const label = item.parentElement.querySelector('label').textContent;
            const quantity = item.parentElement.querySelector('input[type="number"]').value;
            const price = parseFloat(label.split(' - R$ ')[1].replace(',', '.'));
            const itemTotal = price * quantity;
            total += itemTotal;
            cartText += `${label} x${quantity} = R$ ${itemTotal.toFixed(2)}<br>`;
        }
    });

    cartItems.innerHTML = cartText || 'Nenhum item selecionado.';
    totalAmount.textContent = total.toFixed(2);
}

function finalizarPedido() {
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const pagamento = document.querySelector('input[name="pagamento"]:checked').value;
    const total = document.getElementById('totalAmount').textContent;

    alert(`Pedido Confirmado!\nNome: ${nome}\nEndereço: ${endereco}\nPagamento: ${pagamento}\nTotal: R$ ${total}`);
}