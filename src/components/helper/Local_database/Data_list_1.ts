const acc_data:any = [
    {
      Acc: "Your Orders",
      Acc_description: "Track,return or buy things again",
      Acc_url: "/img/acc_order.png",
    },
    {
      Acc: "Login & security",
      Acc_description: "Edit login,name,and mobile number",
      Acc_url: "/img/acc_log.png",
      Acc_redirect: "/account/edit_user"
    },
    {
      Acc: "Prime",
      Acc_description: "View benefits and payment settings",
      Acc_url: "/img/acc_prime.png",
    },
    {
      Acc: "Your Address",
      Acc_description: "Edit addresses for orders and gifts",
      Acc_url: "/img/acc_add.png",
    },
    {
      Acc: "Payment options",
      Acc_description: "Edit or add payment methods",
      Acc_url: "/img/acc_payment.png",
    },
    {
      Acc: "Amazon Pay balance",
      Acc_description: "Add money to your balance",
      Acc_url: "/img/acc_apb.png",
    },
    {
      Acc: "Contact Us",
      Acc_description: "",
      Acc_url: "/img/acc_contact.png",
    },
    {
      Acc: "Your business account",
      Acc_description:
        "Sign up to save up to 28% with GST invoice and bulk discounts, purchase on credit, and more",
      Acc_url: "/img/acc_amazon_buss.jpg",
    },
  ];
  const acc_other_links:any = [
    {
        main_header: "Digital content and devices",
        link:[
            {
                link_title:"Apps and more"
            },
            {
                link_title:"Content and devices"
            },
            {
                link_title:"Digital gifts you've received"
            },

        ]
    },
    {
        main_header: "Email alerts, messages, and ads",
        link:[
            {
                link_title:"Advertising preferences"
            },
            {
                link_title:"SMS alert preferences"
            },
            {
                link_title:"Message center"
            },
            {
                link_title:"Alexa shopping notifications"
            },
            {
                link_title:"Deals Notifications"
            },

        ]
    },
    {
        main_header: "More ways to pay",
        link:[
            {
                link_title:"Default Purchase Settings"
            },
            {
                link_title:"Amazon Pay"
            },
            {
                link_title:"Coupons"
            },
           

        ]
    },
    {
        main_header: "Ordering and shopping preferences",
        link:[
            {
                link_title:"Leave packaging feedback"
            },
            {
                link_title:"Amazon Pay"
            },
            {
                link_title:"Coupons"
            },
            {
                link_title:"Alexa shopping notifications"
            },
            {
                link_title:"Deals Notifications"
            },

        ]
    },
  ]

  export  {acc_data,acc_other_links}