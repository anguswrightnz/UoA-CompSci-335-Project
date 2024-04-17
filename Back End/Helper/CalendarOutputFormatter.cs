using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.Net.Http.Headers;
using A2.Models;

namespace A2.Helper
{
    public class CalendarOutputFormatter : TextOutputFormatter
    {
        public CalendarOutputFormatter()
        {
            SupportedMediaTypes.Add(MediaTypeHeaderValue.Parse("text/calendar"));
            SupportedEncodings.Add(Encoding.UTF8);
        }

        public override Task WriteResponseBodyAsync(OutputFormatterWriteContext context, Encoding selectedEncoding)
        {
            Event e = (Event)context.Object;
            StringBuilder builder = new StringBuilder();
            builder.AppendLine("BEGIN:VCALENDAR");
            builder.AppendLine("VERSION:2.0");
            builder.AppendLine("PRODID:awri813");
            builder.AppendLine("BEGIN:VEVENT");
            builder.Append("UID:").AppendLine(e.Id.ToString());
            builder.Append("DTSTAMP:").AppendLine(DateTime.Now.ToString("yyyyMMddTHHmmssZ", System.Globalization.CultureInfo.InvariantCulture));
            builder.Append("DTSTART:").AppendLine(e.Start.ToString());
            builder.Append("DTEND:").AppendLine(e.End.ToString());
            builder.Append("SUMMARY:").AppendLine(e.Summary);
            builder.Append("DESCRIPTION:").AppendLine(e.Description);
            builder.Append("LOCATION:").AppendLine(e.Location);
            builder.AppendLine("END:VEVENT");
            builder.AppendLine("END:VCALENDAR");
            string outString = builder.ToString();
            byte[] outBytes = selectedEncoding.GetBytes(outString);
            var response = context.HttpContext.Response.Body;
            return response.WriteAsync(outBytes, 0, outBytes.Length);
        }
    }
}
