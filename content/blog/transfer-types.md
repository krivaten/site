---
title: Banking Basics - A Guide to the Transaction Types
description: 
banner: "06 - Assets/bank.jpg"
tags: #banking
category: banking
type: blog
publish: true
created: 2023-05-14
updated: 
---

I've spent countless hours crafting user-friendly interfaces, debugging code, and ensuring seamless interaction between users and our banking system. In the grand scheme of things, my focus has primarily been on creating a smooth customer experience. However, it wasn't until recently that I took a deep dive into understanding the nuts and bolts of the banking processes that underpin these interactions, specifically the various types of bank transfers.

You see, in the world of banking, a transfer isn't just a transfer. There's an entire ecosystem of various transfer types, each with its own unique mechanisms, benefits, and use-cases. From Automated Clearing House (ACH) transfers and wire transfers to cashier's checks and person-to-person (P2P) payments, the landscape of bank transfers is as diverse as it is fascinating.

In my journey of discovery, I've learned that understanding these different transfer types is not only crucial for my growth as a software engineer in the banking sector, but it also equips me with the knowledge to build more effective, efficient, and user-friendly banking applications.

So, whether you're a seasoned software engineer looking to gain a better understanding of the banking industry, a newcomer to the field, or just curious about how money moves around in this digital age, join me as I share my insights and break down the complex world of bank transfers into understandable chunks. Let's unravel the mystery together!

## Types of Transfers
### Wire Transfers
These types of transfers are great when you need to move money _quickly_ between financial institutions. These are often used for large transactions or when speed is a necessary component, because most transfers can happen on within the same day, or the next business day. While you pay for the benefit of speed, one potential downside is that once money is successfully moved, it typically cannot be reversed. So keep that in mind before you send money to that Nigerian Prince... again.

How wire transfers work is, first the bank sending the wire transfer deducts the funds from the customer's account. From there, the money is sent to the recipient's bank through one of many networks such as SWIFT or Fedwire. Once the recipient's bank receives and verifies the details of the transfer request, the funds are added their account.

### Automated Clearing House (ACH)
When speed is not of the essence, ACH transfers are a safe bet when you need to move money within the same country. While they may take up to a few days to process, they are also usually free; which is why they are often used for things like direct deposits, bill payments, and moving your money between accounts. 

This type of transfer uses a method called batch processing, where transactions are bundled together and then sent at specific times to the ACH network. From there, the clearing house will route the transactions to the correct recipients where they will debit or credit the funds to the specified account.

### Bank Draft
A bank draft is a payment method where the payer's bank guarantees payment to the payee. They do this by first verifying the payee has sufficient funds, and then setting those funds aside for the payee. This provides a sense of security for the payee, as the funds are guaranteed to be available by the bank. Bank drafts are often used larger purchases and support a number of currencies. As such, they can be used for both domestic and international transfers. 

### Cashier's Check
Cashier's checks, also known as certified checks, are almost identical to bank drafts. The primary difference is, with a cashier's check the money is actually transacted from the customer's account and to the bank's account. The bank then issues a check which pulls the money directly from their account rather than the payee's. 

While they can technically be used for international transfers, there is little reason to. That's because international transfers makes them subject to fees, delays, and possible rejection by the foreign bank. As a result, they are primarily used for domestic transfers.

### Money Orders

These are another guaranteed type of payment, like bank drafts and cashier's checks. The differences being that with money orders, you don't need to have an account with a financial institution, and the money can be refunded as long as it has not been cashed. However, amounts are limited to less than $1,000 for domestic and $700 for international orders.

### P2P


### Online Bill Pay

---
    
    
3.  Electronic Funds Transfer (EFT): EFT is a general term for any electronic transfer of money, which includes wire transfers and ACH transfers. EFTs can be used for various purposes, such as paying bills or transferring money between accounts.
    
4.  Real-Time Gross Settlement (RTGS): RTGS is a type of transfer used for high-value transactions that require immediate clearing. It's faster than ACH transfers and often used for large business transactions. In an RTGS system, transactions are processed individually and settled in real-time.
    
5.  International transfers: International transfers move money between banks in different countries. These transfers often use the SWIFT network, which is a global messaging system used by banks to securely send information about financial transactions. International transfers can be more expensive and slower than domestic transfers because they involve currency conversion and additional fees.
    
6.  Online payment services: Online payment services, like PayPal or Venmo, allow you to transfer money between people or businesses using their email addresses or phone numbers. These services may be connected to your bank account or a credit card, and they often charge fees for transactions.
    
7.  Mobile payment services: Mobile payment services, like Apple Pay or Google Pay, let you transfer money using your smartphone. These services are connected to your bank account or credit card, and they use near-field communication (NFC) technology to securely make payments at stores or online.
---
    
    
6.  **Person-to-Person (P2P) Transfers:** P2P transfers allow individuals to transfer funds from their bank account directly to someone else's account via the internet or a mobile app, like Venmo or Zelle. These transfers can often occur in real-time or within a few minutes.
    
7.  **Online Bill Pay:** Many banks offer an online bill pay service where the bank will send a check or electronic payment to a business or individual on behalf of the customer. This service can be used for one-time payments or recurring payments, such as monthly utility bills.
    

Each type of transfer has its own unique features, and the best one to use will depend on the specific needs of the transaction, such as the amount of money being transferred, how quickly the funds need to be available, and whether the transfer is domestic or international.

![](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2738%27%20height=%2738%27/%3e)![User](https://chat.openai.com/_next/image?url=https%3A%2F%2Fs.gravatar.com%2Favatar%2Fa98890084aa7afef35d797d935f38eeb%3Fs%3D480%26r%3Dpg%26d%3Dhttps%253A%252F%252Fcdn.auth0.com%252Favatars%252Fkr.png&w=96&q=75)

Can you write the introduction to a blog post that describes the different types of bank transfers? It should be from the perspective of a frontend software engineer, who works in banking, but is only now learning about the different types.

ChatGPT

Title: "Demystifying Bank Transfers: A Software Engineer's Journey in the Banking World"

Hello everyone!

As a frontend software engineer, I've spent countless hours crafting user-friendly interfaces, debugging code, and ensuring seamless interaction between users and our banking system. In the grand scheme of things, my focus has primarily been on creating a smooth customer experience. However, it wasn't until recently that I took a deep dive into understanding the nuts and bolts of the banking processes that underpin these interactions, specifically the various types of bank transfers.

You see, in the world of banking, a transfer isn't just a transfer. There's an entire ecosystem of various transfer types, each with its own unique mechanisms, benefits, and use-cases. From Automated Clearing House (ACH) transfers and wire transfers to cashier's checks and person-to-person (P2P) payments, the landscape of bank transfers is as diverse as it is fascinating.

In my journey of discovery, I've learned that understanding these different transfer types is not only crucial for my growth as a software engineer in the banking sector, but it also equips me with the knowledge to build more effective, efficient, and user-friendly banking applications.

So, whether you're a seasoned software engineer looking to gain a better understanding of the banking industry, a newcomer to the field, or just curious about how money moves around in this digital age, join me as I share my insights and break down the complex world of bank transfers into understandable chunks. Let's unravel the mystery together!

![](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2738%27%20height=%2738%27/%3e)![User](https://chat.openai.com/_next/image?url=https%3A%2F%2Fs.gravatar.com%2Favatar%2Fa98890084aa7afef35d797d935f38eeb%3Fs%3D480%26r%3Dpg%26d%3Dhttps%253A%252F%252Fcdn.auth0.com%252Favatars%252Fkr.png&w=96&q=75)

From the most recent list, are there any other types of transfers used in the U.S.? Like EFTs?

ChatGPT

Yes, Electronic Funds Transfers (EFTs) are also used in the U.S., and they actually encompass several types of transfers mentioned in the previous list. EFT is a broad term that refers to any transfer of funds initiated through an electronic terminal, such as a computer or electronic device.

Types of EFTs include:

1.  **Automated Clearing House (ACH) Transfers:** As previously mentioned, ACH transfers are a type of EFT that is used for recurring transfers like direct deposits, bill payments, and moving money between accounts at different banks.
    
2.  **Direct Deposit:** This is a specific type of ACH transfer where funds are electronically deposited directly into a recipient's bank account. Employers often use direct deposits to pay salaries to their employees.
    
3.  **ATM Transactions:** When you withdraw or deposit money at an ATM, or check your balance, you're using EFT.
    
4.  **Point-of-Sale (POS) Transactions:** When you use your debit card to make a purchase at a store, the funds are electronically transferred from your bank account to the merchant's bank account.
    
5.  **Online Banking:** Online banking often involves EFTs. When you log into your bank account online and move money between accounts, or pay your bills, you're using EFT.
    
6.  **Mobile Payments:** Mobile payment services like Apple Pay and Google Pay use EFT to transfer funds from a user's account to a merchant's account.
    
7.  **Person-to-Person (P2P) Payments:** P2P services like Venmo or Zelle use EFT to transfer funds between users.
    
