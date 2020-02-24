class Card {
    constructor(node,goods) {
        this.node = node;
        this.goods = goods;
        this.active = this.active.bind(this);
        this.inactive = this.inactive.bind(this);
    }

    active() {
        this.node.addEventListener('mouseover', () => this.node.classList.add('active'))
    }

    inactive() {
        this.node.addEventListener('mouseout', () => this.node.classList.remove('active'))
    }


}

module.exports = Card;