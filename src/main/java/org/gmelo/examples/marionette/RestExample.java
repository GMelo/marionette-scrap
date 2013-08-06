package org.gmelo.examples.marionette;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * User: GMelo
 * Date: 02/08/2013
 */

@Path("/rest")

public class RestExample {

    @GET
    @Path("/someText")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getSomeText(){
        String someText = "Some text";
        return Response.status(Response.Status.OK).entity(someText).build();
    }
}
