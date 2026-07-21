---
title: The DNS Protocol
description: A quick tour of the request/response flow before we write any code.
tags:
    - go
    - dns
status: published
createdAt: 2025-02-04
publishedAt: 2025-02-04
updatedAt: 2025-02-04
order: 1
---

Before we open a socket, it helps to understand the shape of a DNS exchange: a client
sends a query, a resolver answers. This scratch part exists only to verify the series
part route renders and prerenders end to end.
