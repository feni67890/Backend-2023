<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{

    public function index()
    {
        # menggunakan model Student untuk select data
        $students = Student::all();

        if (!empty($students)) {
            $data = [
                'message' => 'Get All student',
                'data' => $students,
            ];
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'data not found',
                'data' => []
            ];

            return response()->json($data, 404);
        }
    }

    public function show($id)
    {
        $student = Student::find($id);
        if ($student) {
            $data = [
                'massage' => 'get detail student',
                'data' => $student,
            ];
            return response()->json($data, 200);
        } else {
            $data = [
                'massage' => 'student not found',
            ];
            return response()->json($data, 404);
        }
    }

    public function store(Request $request)
    {

        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $student = Student::create($input);

        $response = [
            'message' => 'Data Student Berhasil  Dibuat',
            'data' => $student,
        ];

        return response()->json($response, 201);
    }

    public function update(Request $request, $id)
    {
        $student = Student::find($id);

        if (!$student) {
            $data = [
                'message' => 'Student not found'
            ];

            return response()->json($data, 404);
        }

        $input = [
            'nama' => $request->nama ?? $student->nama,
            'nim' => $request->nim ?? $student->nim,
            'email' => $request->email ?? $student->email,
            'jurusan' => $request->jurusan ?? $student->jurusan
        ];

        $student->update($input);

        $data = [
            'message' => 'Student successfully edited',
            'data' => $student
        ];

        return response()->json($data, 201);
    }

    public function destroy($id)
    {
        $student = Student::find($id);

        if ($student) {
            $student->delete();
            $response = [
                'message' => 'Student is delete',
                'data' => $student
            ];

            return response()->json($response, 200);
        } else {
            $response = [
                'message' => 'Data not found'
            ];

            return response()->json($response, 404);
        }
    }
}
