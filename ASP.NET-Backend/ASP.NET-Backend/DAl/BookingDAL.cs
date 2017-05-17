using System;
using System.Data;
using System.Data.SqlClient;
using ASP.NET_Backend.Models;
using System.Configuration;
using System.Collections.Generic;

namespace ASP.NET_Backend.DAl
{
	public class BookingDAL : IBooking
	{
        public int AddBooking(Booking booking)
        {
            var i = 0;
            using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["ApplicationDbContext"].ConnectionString))
            {
                conn.Open();
                var cmd = conn.CreateCommand();
                // Set the isolation level to ReadCommitted /GUNNAR
               // var transaction = conn.BeginTransaction();
                //cmd.Transaction = transaction;
                try
                {
                    //var bookingTime = CreateBookingTime(bt);
                    cmd.CommandText = "INSERT INTO Booking(totalprice, hairdressId, customerId, salonBookingId, bookingTimeBookingId) output inserted.bookingId VALUES(@totalprice, @hairdresserId, @customerId, @salonBookingId, @bookingTimeBookingId)";
                    cmd.Parameters.AddWithValue("totalprice", booking.totalPrice);
                    cmd.Parameters.AddWithValue("hairdresserId", booking.hairdresserId);
                    cmd.Parameters.AddWithValue("customerId", booking.customerId);
                    cmd.Parameters.AddWithValue("salonBookingId", booking.salonId);
                    cmd.Parameters.AddWithValue("bookingTimeBookingId", booking.bookingTimeId);
                    i = (int)cmd.ExecuteScalar();

                    var cmd2 = conn.CreateCommand();
                    for (int j = 0; booking.services.Count > j; j++)
                    {
                        cmd2.CommandText = "INSERT INTO Booking_Service(bookingService_bookingId, bookingService_ServiceId) VALUES(@bookingService_bookingId, @bookingService_ServiceId)";
                        cmd2.Parameters.AddWithValue("bookingService_BookingId", i);
                        cmd2.Parameters.AddWithValue("bookingService_ServiceId", booking.services[j].serviceId);
                        cmd2.ExecuteNonQuery();
                    }
                    conn.Close();
                   // transaction.Commit();
                }
                 catch (Exception e)
                {
                    throw (e);// The transaction failed
                    try
                    {
                        // Try rolling back
                      //  transaction.Rollback();
                        Console.WriteLine("Transaction was rolled back");
                    }
                    catch (SqlException ex)
                    {
                        // Rolling back failed
                        throw (ex);
                        //Console.WriteLine("Transaction rollback failed");
                    }
                    throw (e);
                }
            }
            return i;
        }

        public BookingTime FindBookingTime(int id)
		{
			SqlConnection sqlConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["ApplicationDbContext"].ConnectionString);
			SqlCommand cmd = new SqlCommand();
			cmd.CommandType = CommandType.Text;
			cmd.CommandText = @"select * from BookingTime where bookingTimeId = @bookingTimeId";
			cmd.Parameters.AddWithValue("@bookingTimeId", id);

			cmd.Connection = sqlConnection;
			cmd.Connection.Open();
			var dbReader = cmd.ExecuteReader();

			BookingTime b = null;

			while (dbReader.Read())
			{
				b = ObjectBuilder.CreateBookingTime(dbReader);
			}
			return b;
		}

		public Customer FindCustomer(int id)
		{
			Customer customer = null;
			using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["ApplicationDbContext"].ConnectionString))
			{
				conn.Open();
				var command = new SqlCommand("select * from Customer,Person where customerPersonId = personId and customerPersonId = @CustomerId", conn);
				command.Parameters.AddWithValue("CustomerId", id);
				var reader = command.ExecuteReader();
				while (reader.Read())
				{
					// Build the object
					customer = ObjectBuilder.CreateCustomer(reader);

				}
			}
			return customer;
		}

		public Hairdresser FindHairdresser(int id)
		{
			Hairdresser hairdresser = null;
			using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["ApplicationDbContext"].ConnectionString))
			{
				conn.Open();
				var command = new SqlCommand("select * from HairDresser,Person where personHairDresserId = personId and personHairDresserId =@HairDresserId", conn);
				command.Parameters.AddWithValue("HairDresserId", id);
				var reader = command.ExecuteReader();
				while (reader.Read())
				{
					// Build the object
					hairdresser = ObjectBuilder.CreateHairDresser(reader);

				}
			}
			return hairdresser;
		}

		public Salon FindSalon(int id)
		{
			try
			{
				SqlConnection sqlConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["ApplicationDbContext"].ConnectionString);
				SqlCommand cmd = new SqlCommand();
				cmd.CommandType = CommandType.Text;
				cmd.CommandText = @"select * from Salon where salonId = @salonId";
				cmd.Parameters.AddWithValue("@salonId", id);

				cmd.Connection = sqlConnection;
				cmd.Connection.Open();
				var dbReader = cmd.ExecuteReader();

				Salon s = null;

				while (dbReader.Read())
				{
					s = ObjectBuilder.CreateSalon(dbReader);
				}
				return s;

			}
			catch (Exception)
			{

				throw;
			}

		}

		public Service FindService(int id)
		{
			SqlConnection sqlConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["ApplicationDbContext"].ConnectionString);
			SqlCommand cmd = new SqlCommand();
			cmd.CommandType = CommandType.Text;
			cmd.CommandText = @"select * from Service_ where serviceId = @serviceId";
			cmd.Parameters.AddWithValue("@serviceId", id);

			cmd.Connection = sqlConnection;
			cmd.Connection.Open();
			var dbReader = cmd.ExecuteReader();

			Service s = new Service();

			while (dbReader.Read())
			{
				s = ObjectBuilder.CreateService(dbReader);
			}
			return s;
		}

		public BookingTime CreateBookingTime(BookingTime bt)
		{

			var id = 0;
			try
			{
				SqlConnection sqlConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["ApplicationDbContext"].ConnectionString);
				var cmd = sqlConnection.CreateCommand();
				sqlConnection.Open();
				cmd.CommandType = CommandType.Text;
				cmd.CommandText = @"insert into BookingTime(date_, startTime, endTime) output inserted.bookingTimeId values (@date_, @startTime, @endTime);";
				cmd.Parameters.AddWithValue("@date_", bt.date);
				cmd.Parameters.AddWithValue("@startTime", bt.startTime);
				cmd.Parameters.AddWithValue("@endTime", bt.endTime);
				//cmd.Parameters.AddWithValue("@bookingTimeBookingId", bt.bookingTimeBookingId);

				id = (int)cmd.ExecuteScalar();
				bt.bookingTimeId = id;
				sqlConnection.Close();
				return bt;
			}
			catch (Exception e)
			{
				throw e;
			}
		}

		public Customer CreateCustomer(Customer customer)
		{
			
			try
			{
				SqlConnection sqlConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["ApplicationDbContext"].ConnectionString);
				var cmd = sqlConnection.CreateCommand();
				sqlConnection.Open();
				cmd.CommandType = CommandType.Text;
				cmd.CommandText = "INSERT INTO Person (personName, personEmail, personPassword, personType) output inserted.personId VALUES (@personName, @personEmail, @personPassword, @personType);";
				cmd.Parameters.AddWithValue("@personName", customer.name);
				cmd.Parameters.AddWithValue("@personEmail", customer.email);
				cmd.Parameters.AddWithValue("@personPassword", customer.password);
				cmd.Parameters.AddWithValue("@personType", customer.persontype);
                var id = (int)cmd.ExecuteScalar();
                var cmd2 = sqlConnection.CreateCommand();
                cmd2.CommandText = "INSERT INTO Customer (number, customerPersonId) output inserted.customerId VALUES(@phone, @personId);";
				cmd2.Parameters.AddWithValue("phone", customer.phone);
				cmd2.Parameters.AddWithValue("personId", id);
                customer.customerId = (int)cmd2.ExecuteScalar();
				//customer.customerId = id;
				sqlConnection.Close();

				return customer;
			}
			catch (Exception e)
			{
				throw e;
			}
		}

		public List<AllBookings> GetAllBookings()
		{
			try
			{
				SqlConnection sqlConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["ApplicationDbContext"].ConnectionString);
				SqlCommand cmd = new SqlCommand();
				List<AllBookings> bookings = new List<AllBookings>();
				cmd.CommandType = CommandType.Text;
				cmd.CommandText = "SELECT DISTINCT Booking.bookingId, Booking.totalPrice, hp.personName AS hairdresserName, cp.personName AS customerName, BookingTime.date_, BookingTime.startTime, Service_.serviceType " +
					"FROM Booking b," +
					"Person hp JOIN HairDresser ON hp.personId = HairDresser.personHairDresserId " +
					"JOIN Booking ON HairDresser.hairDresserId = Booking.hairdressId, " +
					"Person cp JOIN Customer ON cp.personId = Customer.customerPersonId " +
					"JOIN Booking bc ON Customer.customerId = bc.customerId, " +
					"BookingTime JOIN Booking bt ON BookingTime.bookingTimeId = bt.bookingTimeBookingId, " +
					"Service_ JOIN Booking_Service ON Service_.serviceId = Booking_Service.bookingService_ServiceId JOIN Booking bs ON Booking_Service.bookingService_BookingId = bs.bookingId " +
					"WHERE Booking.bookingId = Booking.bookingId";

				cmd.Connection = sqlConnection;
				cmd.Connection.Open();
				var dbReader = cmd.ExecuteReader();

				AllBookings b;

				while (dbReader.Read())
				{
					b = new AllBookings(dbReader["hairdresserName"].ToString(),
						dbReader["customerName"].ToString(),
						dbReader["date_"].ToString(),
						dbReader["startTime"].ToString(),
						dbReader["serviceType"].ToString(),
						Convert.ToInt32(dbReader["bookingId"]),
						Convert.ToDouble(dbReader["totalPrice"]));

					bookings.Add(b);
				}
				dbReader.Close();
				sqlConnection.Close();
				return bookings;
			}
			catch (Exception e)
			{
				throw e;
			}
		}
	}
}

