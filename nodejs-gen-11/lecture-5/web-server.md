## Web Server

*Note: Every similarity to [this](bobansugareski/ch163833/migrate-the-current-payout-to-two-days-delayed) article is a coincidence.*

The term web server can refer to hardware or software, or both of them working together.

1. On the **hardware side**, a web server is a **computer that stores web server software and a website's component files**. (e.g. HTML documents, images, CSS stylesheets and JS files). A web server connects to the Internet and supports physical data interchange with other devices connected to the web.

2. On the **software side**, a web server is a **software** (well that was unexpected) **that control how web users access hosted files**. At a minimum, this is a HTTP server. An HTTP server is software that understands URLs (web addresses) and HTTP (the protocol your browser uses to view webpages).

Whenever a browser needs a file that is hosted on a web server, the browser requests the file via HTTP. When the request reaches the correct (hardware) web server, the (software) HTTP server accepts the request, finds the requested document, and sends it back to the browser, also through HTTP.

## Static vs Dynamic Web Servers

A **static web server** consists of a computer (hardware) with an HTTP server (software). We call it "static" because the server sends its hosted files as-is to your browser.

A **dynamic web server** consists of a static web server plus extra software, most commonly an application server and a database. We call it "dynamic" because the application server updates the hosted files before sending content to your browser via the HTTP server. This complexity makes it far more challenging to build a website.

For example, to produce the final webpages you see in the browser, the application server might fill an HTML template with content from a database. Sites like Wikipedia have thousands of webpages. Typically, these kinds of sites are composed of only a few HTML templates and a giant database, rather than thousands of static HTML documents. This setup makes it easier to maintain and deliver the content.

## Good News
We don't have to, and I suggest we never do reinvent the wheel. Unless you really want to dive deep in the subject and create your own application web server, using an existing technology is the way to go. Application web server technologies usually come in the form of libraries/frameworks.

## Express
The most popular web application framework for Node.
