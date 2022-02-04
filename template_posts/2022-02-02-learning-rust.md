---
layout: post
title:  "My journey learning Rust"
# author: shrey 
categories: [ Personal, Rust, Programming ]
# image: assets/images/6.jpg
# 5 minute read
---

Have you ever been in the situation where your code isn't fast enough but you've exhausted your options? I guess its time to buckle up those big boy pants and rewrite in C++... right? Well what if I was to tell you theres another option.

Over the last 6 months I've been learning Rust; a systems programming language that gives you lower level control of your software (like you'd see in C/C++) while still being built in a high level and friendly manner.

#### Why learn a new language?

Over the last couple years I've primarily been writing Python and a mentor of mine mentioned he was learning Rust. He showed me some of the toy code he wrote, the exhaustive pattern matching and the amazing compiler (if you don't know what I'm taking about don't worry about it). It sounded cool to work with but the learning curve was steep and I wasn't exactly hooked on Rust just yet.

I was comfortable writing Python; the syntax and semantics are simple, its easy to get started writing something new, has external libraries that enable you to do virtually anything, and I'm familiar with it. One day at work (I was at a Python shop at the time) we wanted to write some performant code that aggregates data from external sources but were being bottle-necked by Python's marshaling process.

> Marshaling is the process of converting data from a memory representation into a data representation that can be stored and transmitted easily. 

I realized that if the core process of marshaling was being limited there wasn't much we could do to improve performance... other than rewrite the code in a new language. And thats when I decided it was time to learn a new language.

#### So why Rust?

Different coding languages can do different things. When you think Javascript you think websites (frontend mainly). When you think Ruby you think backend in Rails. When you think C or C++ you think systems programming. And when you think Python you think shit I can do anything with all these libraries.

So when you choose a language you have to keep in mind what you're planning to build with it. Personally, I already have Python in my tool set so I wasn't focused on an easy to learn language that I could use for building backend services. Instead, I wanted to learn a lower level language that gave me more control of my resources and could be used for performant systems programming. The applications I'd be writing would still likely be backend services but my priorities were different now.

Whats cool about Rust is that its similar to Python in that it can be used in all types of different applications. The external crates (this is what Rust calls libraries) and frameworks enable you to build things from personal CLI tools to backend services to games. This made my choice easier since I knew Rust could be the tool I use when Python just isn't good enough.

A couple other things really stuck out to me when I looked into Rust. Firstly, the active community, though its not yet as active and large as Python, its clearly a growing community. More and more people are learning and starting to use Rust which means more crates and more people to answer your questions on forums. Secondly, Rust natively compiles to WASM (web assembly). 

> "WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications."
-[webassembly.org](https://webassembly.org/ 'title text')

In simple terms, Rust code can be compiled and run in a web browser which makes it easy to distribute. A great application of this is Figma, they switched over to using Rust when their web app was starting to get too slow. Thirdly, the Rust compiler. Rust is a compiled language which means the code is converted into a binary executable before distribution. This enables two big things; code can be checked for errors on compilation and code execution doesn't need a runtime interpreter. This means before you publish your application to be run in production Rust will error and type check everything to make sure it doesn't blow up when run. No runtime interpreter means that the binary can be downloaded and run without a bunch of extra setup.

Theres more to what makes Rust amazing but for now I think I've sealed the deal.

#### How did I start learning Rust?

My approach to learning is simple; first you learn the building blocks and then you build something.

I like to start with the easy stuff that lets you get your foot in the door and build something right away. This keeps me motivated and gives me applicable ability with a language early on. Then I iteratively continue learning and building with the skills I just learned to set it better into my brain. A skill is best learned when you venture off and use it for yourself.

With my Rust journey I started with some simple YouTube tutorials but I realized that the language itself was complicated enough that the basic building blocks wouldn't be enough to build anything meaningful. I then started working through the Rust Programming Book (https://doc.rust-lang.org/stable/book/title-page.html). I highly recommend this book, it progresses well and linearly increases the difficulty of what is being learned so you're not overwhelmed early on. The book is also formatted with hands-on projects and challenges between Chapters so you can practice and fortify your learning.

#### Whats next?

As Rust can be used for numerous different applications, it enables me to get creative with what I use it to build. Recently, I've been excited with the idea of game development (though I've heard horror stories about the industry as a whole). Theres a growing gaming Rust community and many frameworks used for building games with Rust. One that's particularly catching my eye is "Bevy". That's all I'll say for now.

Stay tuned and stay curious!
