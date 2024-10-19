function main() {

  /// 예시 코드
  var shopping_cart = [];

  const addItemToCart = (shopping_cart, name, price) => [ ...shopping_cart, { name, price } ];
  const calculateCartTotal = (shopping_cart = []) => shopping_cart.reduce((sum, item) => sum + item.price, 0);
  const calculateTax = (shopping_cart_total) => shopping_cart_total * 0.1;
  const callShippingIcon = (price, shopping_cart_total) => price + shopping_cart_total >= 20 ? () => button.show_free_shopping_icon() : () => button.hide_free_shopping_icon();


  // 장바구니에 아이템을 추가한다.
  function add_item_to_cart(name, price) {
    shopping_cart = addItemToCart(shopping_cart, name, price);
    // 장바구니 합계를 계산한다.
    calc_cart_total(shopping_cart);
  }

  // 배송 아이콘을 변경한다.
  function update_shipping_icons(shopping_cart = []) {
    const shopping_cart_total = calculateCartTotal(shopping_cart);
    // 돔의 (아이템별) 구매버튼을 가져온다.
    var buy_buttons = get_buy_buttons_dom();
    // 구매버튼 for 문
    for (var i = 0; i < buy_buttons.length; i++) {
      // 각 아이템당 구매버튼
      var button = buy_buttons[i];
      // 버튼의 아이템 가격 + 장바구니 합계 >= 20 이상이면 무료배송 아이콘 보이기
      if (buy_buttons[i].price + shopping_cart_total >= 20) button.show_free_shopping_icon();
      else button.hide_free_shopping_icon();
    }
  }

  // 세금 돔을 변경한다.
  function update_tax_dom(shopping_cart_total = 0) {
    // 장바구니 총합계의 10퍼센트
    set_tax_dom(calculateTax(shopping_cart_total = 0));
  }

  // 장바구니 총 합계를 계산한다.
  function calc_cart_total(shopping_cart) {
    const shopping_cart_total = calculateCartTotal(shopping_cart)

    // 장바구니 합계 돔 세팅
    set_cart_total_dom();
    // 배송 아이콘 변경
    update_shipping_icons(shopping_cart);
    // 세금 돔 업데이트
    update_tax_dom(shopping_cart_total);
  }
};

main();