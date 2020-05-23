export default {
  computed: {
    cartSummary() {
      const summary = [];

      const TaxPercent = 2.0;

      const subtotal = this.calcSubtotal();
      const shippingCost = 7.99;
      const taxes = this.calcTaxes(subtotal.value, TaxPercent);

      summary.push(subtotal);
      summary.push({ menuTitle: "Shipping", value: shippingCost });
      summary.push(taxes);
      if (this.coupon.off) {
        summary.push(this.addCoupon());
      }
      summary.push({
        menuTitle: "Total",
        value: subtotal.value + shippingCost + taxes.value
      });
      console.log(summary);
      return summary;
    }
  },
  methods: {
    calcSubtotal() {
      let subtotal = 0;
      this.cart.forEach(cartItem => {
        subtotal += cartItem.product.price * cartItem.quantity;
      });

      if (this.coupon.off) {
        subtotal = (this.coupon.off / 100) * subtotal;
      }

      const summaryItem = {
        menuTitle: "Subtotal",
        value: subtotal
      };
      return summaryItem;
    },

    calcTaxes(subtotal, TaxPercent) {
      let taxes = (TaxPercent / 100) * subtotal;
      const summaryItem = {
        menuTitle: "Tax",
        value: taxes
      };
      return summaryItem;
    },

    addCoupon() {
      const summaryItem = {
        menuTitle: "Coupon",
        value: this.coupon.name
      };
      return summaryItem;
    }
  }
};
