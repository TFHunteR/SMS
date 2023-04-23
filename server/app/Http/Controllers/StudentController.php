<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;
use App\Http\Resources\StudentResource;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return Student::query()->orderBy('std_ID', 'desc')->paginate(10)->toJson(JSON_PRETTY_PRINT);
        // return response(['message' => 'hello'], 200);
        // return StudentResource::collection(Student::all());
        return StudentResource::collection(
            Student::query()->orderBy('std_ID', 'desc')->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStudentRequest $request)
    {
        $data = $request->validate();
        /** @var \App\Models\Student $student */
        // $student = Student::create([
        //     'std_Name' => $data['std_Name'],
        //     'std_Gender' => $data['std_Gender'],
        //     'std_Email' => $data['std_Email'],
        //     'std_Password' => bcrypt($data['std_Password']),
        //     'std_Photo' => $data['std_Photo'],
        //     'std_date_of_birth' => $data['std_date_of_birth'],
        //     'std_parents_guardian' => $data['std_parents_guardian'],
        //     'std_cp_number' => $data['std_cp_number'],
        //     'tchr_Id' => $data['tchr_Id'],
        //     'class_Id' => $data['class_Id'],
        //     'school_Id' => $data['school_Id']

        // ]);

        return response($data, 201) ;
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        return new StudentResource($student);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStudentRequest $request, Student $student)
    {
        $data = $request->validated();
        if (isset($data['std_Password'])){
            $data['std_Password'] = bcrypt($data['$std_Password']);
        }

        $student->update($data);

        return response(['message' => 'Successfully Updated']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        return response('', 204);
    }
}
