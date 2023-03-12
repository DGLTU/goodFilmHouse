import { defineStore } from 'pinia';
import { ref } from 'vue';
// eslint-disable-next-line linebreak-style, import/prefer-default-export
export const useOrderStore = defineStore('orderStore', () => {
  const movie = ref('');
  const movieDate = ref('');
  const movieTime = ref('');
  const tickets = ref([
    {
      name: '全票',
      qty: 0,
      price: 300,
    },
    {
      name: '優待票',
      qty: 0,
      price: 250,
    },
    {
      name: '敬老票',
      qty: 0,
      price: 200,
    },
  ]);
  const discount = ref(0);
  const originTotalPrice = ref(0);
  const totalPrice = ref(0);
  const totalQty = ref(0);
  const seats = ref([]);
  const cart = ref([]);

  function handleDiscount(num) {
    discount.value = 0;
    if (num >= 500) {
      discount.value = (num * 0.1).toFixed(0);
    }
  }
  function handleCount() {
    originTotalPrice.value = 0;
    totalQty.value = 0;
    tickets.value.forEach((ticket) => {
      originTotalPrice.value += ticket.qty * ticket.price;
      totalQty.value += ticket.qty;
    });
    handleDiscount(originTotalPrice.value);
    totalPrice.value = originTotalPrice.value - discount.value;
  }
  function addToCart(product, qty, price) {
    const obj = { name: product, qty, price };
    if (cart.value.length !== 0) {
      let itemIndex = -1;
      cart.value.forEach((item, i) => {
        if (item.name === product) {
          itemIndex = i;
        }
      });
      if (itemIndex !== -1) {
        if (qty === 0) {
          cart.value.splice(itemIndex, 1);
        } else if (qty !== 0) {
          cart.value[itemIndex].qty = qty;
        }
      } else {
        cart.value.push(obj);
      }
    } else {
      cart.value.push(obj);
    }
  }

  return {
    movie,
    movieDate,
    movieTime,
    tickets,
    discount,
    originTotalPrice,
    totalPrice,
    totalQty,
    seats,
    cart,
    handleDiscount,
    handleCount,
    addToCart,
  };
});
export const useAuthStore = defineStore('authStore', () => {
  const token = ref('');
  const role = ref('');
  const id = ref();
  const isAuth = ref(false);

  return {
    token,
    role,
    id,
    isAuth,
  };
});
