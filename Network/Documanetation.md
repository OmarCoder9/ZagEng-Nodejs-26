# Networking & Web Basics

## Why Do We Learn This?
Understanding how the internet works helps us:
- Know how frontend communicates with backend
- Understand how requests travel and responses return
- Build and debug web applications effectively

---

## What is a Network?
A network is a group of connected devices (wired or wireless) that share data.

### Key Concepts:
- **Sender**: The device sending data
- **Receiver**: The device receiving data
- **Protocols**: Rules that define how devices communicate

---

## What is a Protocol?
A protocol is a set of rules that:
- Defines how data is sent and received
- Ensures correct order of data
- Enables communication between systems

---

## Common Protocols

### 1. HTTP / HTTPS
- Used between frontend and backend
- Handles requests and responses

### 2. TCP (Transmission Control Protocol)
- Reliable and ordered data transfer
- Slower but ensures accuracy
- Used in banking, web apps, APIs

### 3. UDP (User Datagram Protocol)
- Faster but less reliable
- No guarantee of delivery or order
- Used in streaming, games, calls

### 4. SMTP
- Used to send emails

---

## Request-Response Cycle

1. Frontend sends an HTTP request  
2. DNS resolves domain to IP  
3. Request goes through:
   - Application Layer (HTTP)
   - Transport Layer (TCP/UDP)
   - Network Layer (routing)
4. Server processes the request  
5. Response returns through the same layers (in reverse)  
6. Frontend displays the result  

---

## DNS (Domain Name System)
- Converts domain names (e.g., google.com) → IP addresses
- Uses caching to improve speed

### Example Flow:
1. User enters a URL
2. Browser checks cache
3. If not found → DNS server
4. DNS returns IP
5. Request is sent to server

---

## IP Address & Port
- **IP Address**: Identifies a server (e.g., 142.250.190.78)
- **Port**: Identifies a specific service
  - 80 → HTTP
  - 443 → HTTPS
  - 3306 → MySQL

---

## HTTP Request Structure

An HTTP request includes:
- **Method** (GET, POST, etc.)
- **URL**
- **Headers**
- **Body** (optional)
- **Query Parameters**

---

## HTTP Methods

### GET
- Retrieve data (read-only)
- No body

### POST
- Create new data
- Includes body (usually JSON)

### PUT
- Full update of a resource

### PATCH
- Partial update

### DELETE
- Remove data

---

## Parameters

### Path Parameters
- Required
- Example: `/users/1`

### Query Parameters
- Optional
- Example: `/users?page=2&limit=10`

Sensitive data (like passwords) should NOT be sent in URLs.

---

## Transport Layer

### TCP vs UDP

| Feature| TCP| UDP|
|--------|----|----|
|Connection|Connection-oriented|Connectionless|
|Reliability|Reliable|Unreliable|
|Speed|Slower|Faster|
|Ordering|Ordered|Not guaranteed|
|Use Cases|Web, APIs, Email|Streaming, Games|

### TCP Features:
- Splits data into chunks
- Uses sequence numbers
- Retransmits lost data

---

## Network Layer
- Determines best route for data
- Uses IP addresses
- Breaks data into packets
- Uses routers for transmission

---

## Server Processing
- Server receives request
- Analyzes and processes it
- Executes logic
- Sends back response

---

## HTTP Response

Example:
```js
HTTP/1.1 200 OK
Content-Type: application/json

{
"message": "success"
}
```

---

## Status Codes

### Categories:

#### 1xx – Informational
- Rarely used

#### 2xx – Success
- 200 OK
- 201 Created
- 204 No Content

#### 3xx – Redirection
- Requires redirect

#### 4xx – Client Errors
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found

#### 5xx – Server Errors
- 500 Internal Server Error
- 502 Bad Gateway
- 503 Service Unavailable

---

## Key Takeaways
- Web communication follows a structured request-response cycle
- Multiple layers (Application, Transport, Network) handle data transfer
- Protocols define how systems communicate
- Understanding HTTP and networking is essential for backend and frontend development