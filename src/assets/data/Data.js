import Binance from '../images/Binance_logo logo.svg'
import Ethereum from '../images/Ethereum logo.svg'
import Blockchain from '../images/Logo_of_Blockchain.io logo.svg'

export const navLinks = [
  {
    id: 1,
    href: '#hero',
    link: 'Home'
  },
  {
    id: 2,
    href: '#about',
    link: 'About'
  },
  {
    id: 3,
    href: '#collections',
    link: 'Collections'
  },
  {
    id: 4,
    href: '#featured',
    link: 'Features'
  },
  {
    id: 5,
    href: '#faq',
    link: 'FAQ'
  }
]

export const stats = [
    {
      id: 1,
      figures: '37k+',
      content: 'Artworks'
    },
    {
      id: 2,
      figures: '20k+',
      content: 'Artists'
    },
    {
      id: 3,
      figures: '99k+',
      content: 'Aucations'
    }
  ]

export const sponsorLogos = [
    {
        id: 1,
        src: Binance
    },
    {
        id: 2,
        src: Ethereum
    },
    {
        id: 3,
        src: Blockchain
    }
]

export const cardsData = {
  Art: [
    {
      id: 1,
      bid: '0.005 ETH',
      title: '@Johny',
      desp: 'Yellow Painting',
      src: require('../images/Rectangle 5.png')
    },
    {
      id: 111,
      bid: '0.005 ETH',
      title: '@Johny',
      desp: 'Yellow Painting',
      src: require('../images/Rectangle 6.png')
    },
    {
      id: 121,
      bid: '0.005 ETH',
      title: '@Johny',
      desp: 'Yellow Painting',
      src: require('../images/Rectangle 7.png')
    },
    {
      id: 18,
      bid: '0.005 ETH',
      title: '@Johny',
      desp: 'Yellow Painting',
      src: require('../images/Rectangle 61.png')
    },
    {
      id: 188,
      bid: '0.005 ETH',
      title: '@Johny',
      desp: 'Yellow Painting',
      src: require('../images/Rectangle 67.png')
    },
    {
      id: 6,
      bid: '0.005 ETH',
      title: '@Johny',
      desp: 'Yellow Painting',
      src: require('../images/image 80.png')
    },
  ],
  Animal: [
    {
      id: 1,
      bid: '0.005 ETH',
      title: '@Johny',
      desp: 'Yellow Painting',
      src: require('../images/Rectangle 11.png')
    },
    {
      id: 2,
      bid: '0.005 ETH',
      title: '@Johny',
      desp: 'Yellow Painting',
      src: require('../images/Rectangle 71.png')
    },
    {
      id: 3,
      bid: '0.005 ETH',
      title: '@Johny',
      desp: 'Yellow Painting',
      src: require('../images/Rectangle 81.png')
    },
    {
      id: 4,
      bid: '0.005 ETH',
      title: '@Johny',
      desp: 'Yellow Painting',
      src: require('../images/Rectangle 8.png')
    },
    {
      id: 5,
      bid: '0.005 ETH',
      title: '@Johny',
      desp: 'Yellow Painting',
      src: require('../images/hero image.png')
    },
    {
      id: 113,
      bid: '0.005 ETH',
      title: '@Johny',
      desp: 'Yellow Painting',
      src: require('../images/virtual-realistic-communication-futuristic-illustrations-digital-painting 3.png')
    },
  ],
  Photography: [
    {
      id: 7338,
      bid: '0.005 ETH',
      title: '@Johny',
      desp: 'Yellow Painting',
      src: require('../images/Rectangle 650.png')
    },
    {
      id: 738,
      bid: '0.005 ETH',
      title: '@Johny',
      desp: 'Yellow Painting',
      src: require('../images/Rectangle 651.png')
    },
    {
      id: 798,
      bid: '0.005 ETH',
      title: '@Johny',
      desp: 'Yellow Painting',
      src: require('../images/Rectangle 66.png')
    },
    {
      id: 7,
      bid: '0.005 ETH',
      title: '@Johny',
      desp: 'Yellow Painting',
      src: require('../images/collection7.png')
    },
    {
      id: 8,
      bid: '0.005 ETH',
      title: '@Johny',
      desp: 'Yellow Painting',
      src: require('../images/collection8.png')
    },
    {
      id: 9,
      bid: '0.005 ETH',
      title: '@Johny',
      desp: 'Yellow Painting',
      src: require('../images/collection9.png')
    }
  ],
}

export const collections = [
  {
    title: 'Art',
    key: 'art',
    data: cardsData.Art
  },
  {
    title: 'Animal',
    key: 'sport',
    data: cardsData.Animal
  },
  {
    title: 'Photography',
    key: 'photography',
    data: cardsData.Photography
  },
];

export const featured = [
  {
    id: 10,
    title: '@Johny',
    bid: '0.005 ETH',
    desp: 'Yellow Painting',
    src: require('../images/collection6.png')
  },
  {
    id: 11,
    title: '@Johny',
    bid: '0.005 ETH',
    desp: 'Yellow Painting',
    src: require('../images/collection7.png')
  },
  {
    id: 12,
    title: '@Johny',
    bid: '0.005 ETH',
    desp: 'Yellow Painting',
    src: require('../images/collection8.png')
  },
  {
    id: 13,
    title: '@Johny',
    bid: '0.005 ETH',
    desp: 'Yellow Painting',
    src: require('../images/collection8.png')
  },
  {
    id: 14,
    title: '@Johny',
    bid: '0.005 ETH',
    desp: 'Yellow Painting',
    src: require('../images/collection9.png')
  }
]

export const creators = [
  {
    name: 'Ben Charles',
    desp: 'Ben Charles is a seasoned designer known for his minimalist style.',
    src: require('../images/creator1.png'),
    profile: require('../images/fa89581d-19ef-4298-87d0-d2ad7fb649dc.jpg')
  },
  {
    name: 'Destiny Arupi',
    desp: 'Destiny Arupi is the owner of the marketplace and a successful NFT creator.',
    src: require('../images/creator2.png'),
    profile: require('../images/Profile.jpg')
  },
  {
    name: 'Olowosoyo Oluwasegun',
    desp: 'Popularly known as TheCommonMan is a skilled developer.',
    src: require('../images/creator3.png'),
    profile: require('../images/a7b24724-face-4d5a-a491-1de0de0c43ce.jpg')
  },
]

export const faq = [
  {
    key: '1',
    eventkey: '0',
    question: 'What is an NFT?',
    answer: 'NFT stands for Non-Fungible Token. It is a unique digital asset that is stored on a blockchain network, providing a way to authenticate and verify ownership of a particular digital item.'
  },
  {
    key: '2',
    eventkey: '1',
    question: 'How do I purchase an NFT?',
    answer: "To purchase an NFT, you typically need to have a cryptocurrency wallet that supports the specific blockchain used by the NFT marketplace. You can then browse the available NFTs, place a bid, or purchase the NFT outright if it's listed for a fixed price."
  },
  {
    key: '3',
    eventkey: '2',
    question: 'What can I do with an NFT once I own it?',
    answer: 'The possibilities are endless! You can hold onto your NFT as a collectible or investment, trade it with other collectors, display it in virtual galleries, or even use it in various blockchain-based games and applications.'
  },
  {
    key: '4',
    eventkey: '3',
    question: 'Can I sell my NFT on the same marketplace where I purchased it?',
    answer: 'Yes, many NFT marketplaces allow users to sell their NFTs on the same platform where they purchased them. Some platforms may charge a fee or take a commission on the sale.'
  },
  {
    key: '5',
    eventkey: '4',
    question: 'What happens if the NFT marketplace shuts down?',
    answer: 'Since NFTs are stored on a blockchain, even if the marketplace shuts down, your NFTs will still exist on the blockchain network, and you will still have ownership of them. However, you may need to use a different platform to access and trade your NFTs.'
  },
  {
    key: '6',
    eventkey: '5',
    question: 'How do I know if an NFT is authentic?',
    answer: 'Each NFT is unique and has a specific identifier that is recorded on the blockchain, making it easy to verify its authenticity. Additionally, many NFT marketplaces have features that help verify the authenticity of the NFT, such as a certificate of authenticity or third-party authentication services.'
  },
]

export const footerLinks ={
  About: [
    {
      link1: "Product",
      link2: "Resource",
      link3: "Term & Condition",
      link4: "FAQ",
    }
  ],
  Company: [
    {
      link1: "Our Team",
      link2: "Partner With Us",
      link3: "Privacy & Policy",
      link4: "Features"
    }
  ],
  Contact: [
    {
      link1: "+234 816 3361 737",
      link3: "destinyarupi@gmail.com",
    }
  ]
}

export const footer = [
  {
    title: 'About',
    key: 'about',
    data: footerLinks.About
  },
  {
    title: 'Company',
    key: 'company',
    data: footerLinks.Company
  },
  {
    title: 'Contact',
    key: 'contact',
    data: footerLinks.Contact
  },
]





