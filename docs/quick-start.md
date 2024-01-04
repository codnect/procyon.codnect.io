---
sidebar_position: 2
---

# Quick Start
You will build a simple web application with Procyon.

### What You Need
* About 15 minutes
* A favorite text editor or IDE
* [Golang](https://go.dev/dl/) version 1.19.4 or above.

### Create a New Project
First we need to create a Procyon application, which can be done in a number of ways.

#### Using command line
The Procyon CLI is a command line tool that you can use to bootstrap a new project. 

Use the following command to Install the Procyon CLI.
```bash
$ go get -u codnect.io/procyon/...
```

Once you have installed the CLI, you can run he below command to verify our installation process.

```bash
$ procyon version
Procyon CLI v0.5.3
```

The `init` command lets you create a new project. The following example 
generates a project named `simple-procyon-webapp`.

```bash
$ procyon init simple-procyon-webapp
```

#### Using Goland or Intellij IDEA
To make the project creation from Goland or Intellij IDEA possible, 
we need to install a plugin from the marketplace called `Procyon`. It makes it easier for you to create a new project.

Once you have installed the plugin, you will see a project generator named `Procyon` in the `New Project` dialog. 
Select `Procyon` to create a new project.

![New Project Dialog](/img/procyon-wizard.png "New Project Dialog")
### Write Your First Router
Let’s create a simple router to display `Hello World!`. 

```go title="pkg/routers/hello.go"
package main

import (
	"codnect.io/procyon/web/http"
	"codnect.io/procyon/web/http/router"
)

type HelloRouter struct {
	
}

// Create a constructor function returning the instance of the HelloRouter
func NewHelloRouter() *HelloRouter {
    return &HelloRouter{}
}

// Implement the Router interface and define the routes
func (r *HelloRouter) Routes() *router.Routes {
	routes := router.Route()
	
	// Route GET '/hello' requests to SayHello handler
	// highlight-next-line
	routes.GET("/hello", http.Handle(r.SayHello))
	
	return routes
}

func (r *HelloRouter) SayHello(ctx http.Context) error {
	response := ctx.Response()
	response.SetHeader("Content-Type", "text/plain")
	_, err := response.Writer().Write([]byte("Hello World!"))
	return err
}
```

The above example includes a single endpoint.

* When an HTTP GET request is sent to the URL `/hello`
  * Hello World! is written to the HTTP response.
* If the request method is not `GET` or the URL is not `/hello`, 
no route matches and an HTTP 404 is returned.

### Register Router
Everything in Procyon is component. You must register your router 
by using the `component.Register` function, so it can be managed by the Procyon Framework.

```go title="cmd/app/main.go"
package main

import (
	"codnect.io/procyon/component"
)

func main() {
	// Run your application
	procyon.New().Run()
}

func init() {
	// Register your constructor function
	// highlight-next-line
	component.Register(NewHelloRouter)
}
```

### Run the Application
Now we are ready to run our application:

```bash
$ go run main.go
```

or

```bash
$ procyon run
```

![Run Application](/img/run-app.png "Run Application")
If you open a web browser to `http://localhost:8080/hello`, you should see output similar to the following:

```bash
Hello World!
```

To gracefully exit the application hit `Ctrl-C`.


